import { inline } from '../lib/inline'

type Props = {
  items: string[]
  ordered?: boolean
}

export default function Ul({ items, ordered }: Props) {
  const cls = `m-0 block pl-[1.2em] ${ordered ? 'list-decimal' : 'list-disc'}`
  const lis = items.map((t, i) => (
    <li key={i} className="my-[7px] leading-[1.35]">
      {inline(t)}
    </li>
  ))
  return ordered ? <ol className={cls}>{lis}</ol> : <ul className={cls}>{lis}</ul>
}
