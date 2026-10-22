import SlideFrame from '../components/SlideFrame'
import Code from '../components/Code'
import Note from '../components/Note'
import { SEC } from '../data/sections'

export default function GrantRevokeSlide() {
  return (
    <SlideFrame title="GRANT, REVOKE và SHOW GRANTS" sec={SEC.priv}>
      <Code>{`CREATE USER 'app'@'10.10.0.2'
      IDENTIFIED BY 'MatKhau@123' REQUIRE SSL;

    GRANT SELECT, INSERT, UPDATE
      ON shop.* TO 'app'@'10.10.0.2';

    SHOW GRANTS FOR 'app'@'10.10.0.2';

    REVOKE INSERT
      ON shop.* FROM 'app'@'10.10.0.2';

    DROP USER 'app'@'10.10.0.2';`}</Code>
      <Note>Từ MySQL 8.0, `GRANT` không còn tự tạo user: phải `CREATE USER` trước.</Note>
    </SlideFrame>
  )
}
