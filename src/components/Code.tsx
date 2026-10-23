export default function Code({
  children,
  className = '',
}: {
  children: string
  className?: string
}) {
  return (
    <pre className={`m-0 w-full overflow-hidden border border-line bg-code text-[0.72em] shadow-none ${className}`}>
      <code className="block max-h-none overflow-x-auto bg-transparent px-3 py-2 font-mono text-[1em] leading-[1.4] whitespace-pre text-ink">
        {children}
      </code>
    </pre>
  )
}
