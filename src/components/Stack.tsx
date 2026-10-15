import type { ReactNode } from 'react'

/** Xếp các phần tử theo chiều dọc, cách đều nhau */
export default function Stack({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-4">{children}</div>
}
