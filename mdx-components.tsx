import type { MDXComponents } from "mdx/types";

export function useMDXComponents(): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold font-mono">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold font-mono">{children}</h2>
    ),
    p: ({ children }) => (
      <p className="text-md leading-relaxed mb-4">{children}</p>
    ),
    a: ({ children, href }) => (
      <a className="hover:underline" href={href} target="_blank">
        {children}
      </a>
    ),
    ul: ({ children }) => <ul className="list-disc mx-5">{children}</ul>,
    ol: ({ children }) => <ul className="list-disc mx-5">{children}</ul>,

    pre: ({ children }) => (
      <pre className="bg-gray-500 text-fuchsia-200">{children}</pre>
    ),
    code: ({ children }) => <code className="font-bold">{children}</code>,

    // Add more components as needed (e.g., ul, li, code, etc.)
  };
}
