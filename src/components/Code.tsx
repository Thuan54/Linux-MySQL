export default function Code({ children }: { children: string }) {
  return (
    <pre className="m-0 w-full overflow-hidden border border-line bg-code text-[0.72em] shadow-none">
      <code className="block max-h-none overflow-x-auto bg-transparent px-3.5 py-2.5 font-mono text-[1em] leading-[1.5] whitespace-pre text-ink">
        {children}
      </code>
    </pre>
  )
}
