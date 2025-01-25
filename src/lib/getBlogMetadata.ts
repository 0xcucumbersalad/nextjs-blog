import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface BlogMetadata {
  title: string;
  date: string;
  summary: string;
  slug: string;
}

// Resolve the "@/markdown/" alias to the actual directory
const markdownDirectory = path.resolve(process.cwd(), './src/markdown');

export function getBlogMetaData(slug: string): BlogMetadata {
  const filePath = path.join(markdownDirectory, `${slug}.mdx`)
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data: metadata } = matter(fileContent);
  
  return {
    ...metadata,
    slug: slug.replace(/\.mdx$/, ''),
  } as BlogMetadata;
}

export async function getAllBlogMetadata(): Promise<BlogMetadata[]> {
  const fileNames = fs.readdirSync(markdownDirectory);
  const allMetadata: BlogMetadata[] = [];

  for (const fileName of fileNames) {
    const slug = fileName.replace(/\.mdx$/, '');  // Remove the `.mdx` extension to get the slug
    try {
      // Dynamically import the MDX file
      const { metadata } = await import(`@/markdown/${slug}.mdx`);
      
      allMetadata.push({
        ...metadata,
        slug,
      });
    } catch (error) {
      console.error(`Error importing ${slug}.mdx:`, error);
    }
  }
  return allMetadata;
}

