import SlideFrame from '../components/SlideFrame'
import Code from '../components/Code'
import Note from '../components/Note'
import Sub from '../components/Sub'
import Cols from '../components/Cols'
import Stack from '../components/Stack'
import { SEC } from '../data/sections'

export default function GrantRevokeSlide() {
  return (
    <SlideFrame title="GRANT, REVOKE và SHOW GRANTS" sec={SEC.priv}>
      <Cols>
        <Stack>
          <Code>{`CREATE USER 'app'@'10.10.0.2'
      IDENTIFIED BY 'MatKhau@123' REQUIRE SSL;

    GRANT SELECT, INSERT, UPDATE
      ON shop.* TO 'app'@'10.10.0.2';

    SHOW GRANTS FOR 'app'@'10.10.0.2';

    REVOKE INSERT
      ON shop.* FROM 'app'@'10.10.0.2';

    DROP USER 'app'@'10.10.0.2';`}</Code>
        </Stack>
        <Stack>
          <Sub>Cú pháp tổng quát</Sub>
          <Code>{`GRANT <danh sách quyền>
      ON <cấp độ> TO '<user>'@'<host>';
    REVOKE <danh sách quyền>
      ON <cấp độ> FROM '<user>'@'<host>';`}</Code>
          <Sub>Role (MySQL 8.0)</Sub>
          <Code>{`CREATE ROLE 'reader';
    GRANT SELECT ON shop.* TO 'reader';
    GRANT 'reader' TO 'app'@'10.10.0.2';
    SET DEFAULT ROLE 'reader'
      TO 'app'@'10.10.0.2';`}</Code>
        </Stack>
      </Cols>
      <Note>Từ MySQL 8.0, `GRANT` không còn tự tạo user: phải `CREATE USER` trước.</Note>
    </SlideFrame>
  )
}
