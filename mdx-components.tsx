import type { MDXComponents } from "mdx/types";

export function useMDXComponents(): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-xl font-bold font-mono mb-10">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-4xl font-bold font-mono">{children}</h2>
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

    pre: ({ children }) => <pre className="">{children}</pre>,
    code: ({ children }) => <code className="text-sm">{children}</code>,
    // Add more components as needed (e.g., ul, li, code, etc.)
  };
}
