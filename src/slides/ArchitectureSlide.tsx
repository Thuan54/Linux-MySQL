import type { ReactNode } from 'react'
import Cols from '../components/Cols'
import SlideFrame from '../components/SlideFrame'
import Ul from '../components/Ul'
import { SEC } from '../data/sections'

function Tier({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="border-2 border-fit bg-white px-3 pt-2 pb-2.5">
      <div className="mb-1.5 font-bold text-fit">{title}</div>
      {children}
    </div>
  )
}

function Cell({ children }: { children: ReactNode }) {
  return (
    <div className="border border-line bg-fit-soft px-2 py-1.5 text-center leading-[1.3]">
      {children}
    </div>
  )
}

export default function ArchitectureSlide() {
  return (
    <SlideFrame title="Kiến trúc tổng quan: hai tầng" sec={SEC.arch}>
      <Cols layout="wide-left">
        <div className="flex flex-col gap-2 text-[0.8em]">
          <Tier title="Client">
            <Cell>mysql CLI, PHP, Python, Java, ... (TCP 3306)</Cell>
          </Tier>
          <div className="text-center leading-none text-fit">▼</div>
          <Tier title="Server Layer">
            <div className="grid grid-cols-3 gap-2">
              <Cell>Connection Manager</Cell>
              <Cell>Authentication</Cell>
              <Cell>Parser</Cell>
              <Cell>Preprocessor</Cell>
              <Cell>Optimizer</Cell>
              <Cell>Executor</Cell>
            </div>
          </Tier>
          <div className="bg-fit p-[5px] text-center font-semibold text-white">
            Storage Engine API (handler interface)
          </div>
          <Tier title="Storage Engine Layer">
            <div className="grid grid-cols-3 gap-2">
              <Cell>
                InnoDB
                <small className="block text-[0.82em] text-muted">mặc định</small>
              </Cell>
              <Cell>MyISAM</Cell>
              <Cell>MEMORY, CSV, ARCHIVE, ...</Cell>
            </div>
          </Tier>
          <Cell>Tập tin trên đĩa (datadir mặc định: /var/lib/mysql)</Cell>
        </div>
        <div>
          <Ul
            items={[
              'Server Layer chịu trách nhiệm quản lý kết nối, xác thực, phân quyền và tiền xử lý câu lệnh SQL trước khi gọi xuống tầng dưới',
              'Storage Engine chịu trách nhiệm lưu trữ và truy xuất dữ liệu',
            ]}
          />
        </div>
      </Cols>
    </SlideFrame>
  )
}
