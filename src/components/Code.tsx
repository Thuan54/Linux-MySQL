export default function Code({ children }: { children: string }) {
  return (
    <pre className="m-0 w-full border border-line bg-code text-[0.72em] shadow-none">
      <code className="block max-h-none overflow-visible bg-transparent px-4 py-3 font-mono text-[1em] leading-[1.5] whitespace-pre text-ink">
        {children}
      </code>
    </pre>
  )
}
