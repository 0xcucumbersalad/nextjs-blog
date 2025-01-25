import { getAllBlogMetadata } from "../../lib/getBlogMetadata";
import Link from "next/link";

export const Blog = async () => {
  const blogPosts = await getAllBlogMetadata();
  if (!blogPosts || blogPosts.length === 0) {
    return (
      <section className="flex flex-col gap-1">
        <span className="font-mono font-bold text-xl">blog</span>
        <p>No blog posts available</p>
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-1">
      <span className="font-mono font-bold text-xl">blog</span>
      <ul className="my-5">
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-lg hover:underline"
                >
                  {post.title}
                </Link>
                <p className="text-sm">{post.summary}</p>
              </div>
              <p>{post.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
