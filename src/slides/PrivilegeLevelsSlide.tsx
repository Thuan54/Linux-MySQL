import SlideFrame from '../components/SlideFrame'
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
    </SlideFrame>
  )
}
