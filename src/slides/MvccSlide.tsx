import type { ReactNode } from 'react'
import Cols from '../components/Cols'
import Note from '../components/Note'
import SlideFrame from '../components/SlideFrame'
import Stack from '../components/Stack'
import Sub from '../components/Sub'
import Table from '../components/Table'
import Ul from '../components/Ul'
import { SEC } from '../data/sections'
import { render } from '../lib/inline'

function Row({ current, children }: { current?: boolean; children: ReactNode }) {
  return (
    <div className={`border-[1.5px] border-fit px-3 py-2 ${current ? 'bg-fit-soft' : 'bg-white'}`}>
      {render(children)}
    </div>
  )
}

function Ptr({ children }: { children: ReactNode }) {
  return <div className="pl-[18px] font-semibold text-fit">{render(children)}</div>
}

export default function MvccSlide() {
  return (
    <SlideFrame title="MVCC: đọc không chặn ghi" sec={SEC.txn}>
      <Cols>
        <Stack>
          <Sub>Mỗi dòng InnoDB có các cột ẩn</Sub>
          <Table
            head={['Cột', 'Ý nghĩa']}
            widths={['30%', '70%']}
            rows={[
              ['`DB_TRX_ID` (6 byte)', 'ID transaction cuối cùng insert hoặc update dòng'],
              ['`DB_ROLL_PTR` (7 byte)', 'Con trỏ tới bản ghi trong undo log'],
              ['`DB_ROW_ID` (6 byte)', 'ID dòng; chỉ có khi bảng không có primary key'],
            ]}
          />
          <Ul
            items={[
              'Khi đọc, InnoDB dùng read view để biết phiên bản nào transaction được phép thấy; nếu không, lần theo `DB_ROLL_PTR` về phiên bản cũ hơn',
              'READ COMMITTED: read view mới cho mỗi câu lệnh; REPEATABLE READ: một read view từ lần đọc đầu tiên',
            ]}
          />
        </Stack>
        <Stack>
          <Sub>Version chain (ví dụ minh họa)</Sub>
          <div className="flex flex-col gap-1 text-[0.78em]">
            <Row current>Dòng hiện tại (clustered index) — `DB_TRX_ID` = 105</Row>
            <Ptr>↓ `DB_ROLL_PTR`</Ptr>
            <Row>Undo log: phiên bản cũ — `DB_TRX_ID` = 103</Row>
            <Ptr>↓ `DB_ROLL_PTR`</Ptr>
            <Row>Undo log: phiên bản cũ hơn — `DB_TRX_ID` = 100</Row>
          </div>
          <Note>Nhờ đó `SELECT` thường không chặn `UPDATE` và ngược lại.</Note>
        </Stack>
      </Cols>
    </SlideFrame>
  )
}
