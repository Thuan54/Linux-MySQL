import SlideFrame from '../components/SlideFrame'
import Ul from '../components/Ul'
import Table from '../components/Table'
import { SEC } from '../data/sections'

export default function PrivilegeLevelsSlide() {
  return (
    <SlideFrame title="Các cấp độ quyền (privilege levels)" sec={SEC.priv}>
      <Table
        head={['Cấp', 'Cách viết', 'Lưu trong', 'Ví dụ']}
        widths={['14%', '22%', '24%', '40%']}
        rows={[
          ['Global', '`*.*`', '`mysql.user`', '`GRANT ... ON *.*`'],
          ['Database', '`shop.*`', '`mysql.db`', '`GRANT ... ON shop.*`'],
          ['Table', '`shop.products`', '`mysql.tables_priv`', '`GRANT ... ON shop.products`'],
          ['Column', 'danh sách cột', '`mysql.columns_priv`', '`GRANT SELECT (id, name) ON shop.products`'],
          ['Routine', 'procedure/function', '`mysql.procs_priv`', '`GRANT EXECUTE ON PROCEDURE shop.p`'],
        ]}
      />
      <Ul
        items={[
          'Quyền thực tế của user là tổng hợp quyền ở mọi cấp',
          'Quyền thường dùng: `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `CREATE`, `DROP`, `ALTER`, `INDEX`, `EXECUTE`, `ALL PRIVILEGES`, `GRANT OPTION`',
          'Các bảng quyền nằm trong schema `mysql`, được nạp vào bộ nhớ khi server khởi động; từ MySQL 8.0 là bảng InnoDB',
        ]}
      />
    </SlideFrame>
  )
}
