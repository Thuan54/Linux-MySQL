import SlideFrame from '../components/SlideFrame'
import Code from '../components/Code'
import Ul from '../components/Ul'
import Cols from '../components/Cols'
import Stack from '../components/Stack'
import { SEC } from '../data/sections'

export default function TransactionSlide() {
  return (
    <SlideFrame title="Transaction trong InnoDB" sec={SEC.txn}>
      <Cols>
        <div>
          <Ul
            items={[
              'Giao dịch là một chuỗi các thao tác CSDL được thực thi như một đơn vị công việc logic duy nhất: hoặc tất cả thành công, hoặc không có gì thay đổi',
              'Ví dụ kinh điển: chuyển tiền (trừ tài khoản A và cộng tài khoản B phải cùng xảy ra)',
              '`autocommit = 1` (mặc định): mỗi câu lệnh là một transaction',
              'Câu lệnh DDL (`CREATE`, `ALTER`, `DROP`...) gây implicit commit',
            ]}
          />
        </div>
        <Stack>
          <Code>{`START TRANSACTION;

UPDATE account
  SET balance = balance - 100 WHERE id = 1;

UPDATE account
  SET balance = balance + 100 WHERE id = 2;

COMMIT; -- hoặc ROLLBACK;`}</Code>
        </Stack>
      </Cols>
    </SlideFrame>
  )
}
