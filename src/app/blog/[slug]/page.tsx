export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  try {
    // Dynamically import the MDX file
    const { default: Post, metadata } = await import(`@/markdown/${slug}.mdx`);
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-center text-2xl font-bold font-mono">
          {metadata.title}
        </h1>
        <p className="text-center text-sm text-gray-600">{metadata.date}</p>
        <Post />
      </div>
    );
  } catch (error) {
    console.log(error);
    return (
      <div className="text-center">
        <h1 className="text-xl font-bold">Post not found</h1>
        <p className="text-gray-600">
          Sorry, the requested post could not be found.
        </p>
      </div>
    );
  }
}

export const dynamicParams = false;
