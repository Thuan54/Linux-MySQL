import SlideFrame from '../components/SlideFrame'
import Code from '../components/Code'
import Ul from '../components/Ul'
import Note from '../components/Note'
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
              'Một nhóm thao tác được thực thi như một đơn vị không chia cắt: hoặc tất cả thành công, hoặc không có gì thay đổi',
              'Ví dụ kinh điển: chuyển tiền (trừ tài khoản A và cộng tài khoản B phải cùng xảy ra)',
              '`autocommit = 1` (mặc định): mỗi câu lệnh là một transaction',
              '`START TRANSACTION` tạm tắt autocommit cho đến khi `COMMIT` / `ROLLBACK`',
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

    COMMIT;     -- hoặc ROLLBACK;`}</Code>
          <Note>MyISAM không hỗ trợ transaction nên `ROLLBACK` không có tác dụng.</Note>
        </Stack>
      </Cols>
    </SlideFrame>
  )
}
