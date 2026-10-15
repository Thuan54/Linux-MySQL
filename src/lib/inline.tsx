import type { ReactNode } from 'react'

/** Chuỗi có `code` trong dấu backtick -> thẻ <code> */
export function inline(text: string): ReactNode {
  return text.split('`').map((part, i) =>
    i % 2 === 1 ? (
      <code
        key={i}
        className="rounded-[3px] border border-line bg-code px-1.5 font-mono text-[0.88em]"
      >
        {part}
      </code>
    ) : (
      part
    ),
  )
}

/** Nếu children là chuỗi thì xử lý `code`, ngược lại giữ nguyên */
export function render(children: ReactNode): ReactNode {
  return typeof children === 'string' ? inline(children) : children
}
