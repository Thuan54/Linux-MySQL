import { inline } from '../lib/inline'

type Props = {
  head: string[]
  rows: string[][]
  widths?: string[]
}

export default function Table({ head, rows, widths }: Props) {
  return (
    <table className="m-0 w-full border-collapse text-[0.8em]">
      {widths && (
        <colgroup>
          {widths.map((w, i) => (
            <col key={i} style={{ width: w }} />
          ))}
        </colgroup>
      )}
      <thead>
        <tr>
          {head.map((h, i) => (
            <th
              key={i}
              className="border border-fit bg-fit px-3 py-[7px] text-left align-top font-semibold text-white"
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className="bg-white even:bg-[#f7f9fd]">
            {r.map((c, j) => (
              <td
                key={j}
                className={`border border-line px-3 py-[7px] text-left align-top ${j === 0 ? 'font-semibold' : ''}`}
              >
                {inline(c)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
