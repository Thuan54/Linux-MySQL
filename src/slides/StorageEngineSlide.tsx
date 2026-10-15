import SlideFrame from '../components/SlideFrame'
import Code from '../components/Code'
import Ul from '../components/Ul'
import Note from '../components/Note'
import Sub from '../components/Sub'
import Cols from '../components/Cols'
import Stack from '../components/Stack'
import { SEC } from '../data/sections'

export default function StorageEngineSlide() {
  return (
    <SlideFrame title="Storage Engine: lưu trữ dữ liệu" sec={SEC.arch}>
      <Cols>
        <div>
          <Sub>Storage Engine chịu trách nhiệm về</Sub>
          <Ul
            items={[
              'Định dạng dữ liệu trên đĩa: cách ghi bảng và index xuống file',
              'Index: tạo, cập nhật, tìm kiếm',
              'Cơ chế khóa: khóa dòng hoặc khóa bảng',
              'Transaction (chỉ InnoDB hỗ trợ)',
              'Phục hồi sau sự cố (InnoDB dùng redo log và undo log)',
              'Cache trong RAM (InnoDB gọi là Buffer Pool)',
            ]}
          />
        </div>
        <Stack>
          <Sub>Chọn và kiểm tra engine</Sub>
          <Code>{`CREATE TABLE t (id INT) ENGINE = InnoDB;

    SHOW ENGINES;
    SHOW TABLE STATUS WHERE Name = 't';`}</Code>
          <Note>
            Cùng một câu SQL có thể có hành vi khác nhau tùy engine của bảng.
          </Note>
        </Stack>
      </Cols>
    </SlideFrame>
  )
}
