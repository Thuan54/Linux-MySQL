import SlideFrame from '../components/SlideFrame'
import Table from '../components/Table'
import { MEMBERS } from '../data/info'
import { SEC } from '../data/sections'

export default function MembersSlide() {
  return (
    <SlideFrame title="Thành viên nhóm" sec={SEC.intro}>
      <Table
        head={['STT', 'MSSV', 'Họ và tên']}
        widths={['12%', '24%', '64%']}
        rows={MEMBERS.map((m, i) => [String(i + 1), m.id, m.name])}
      />
    </SlideFrame>
  )
}
