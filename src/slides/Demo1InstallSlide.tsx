import SlideFrame from '../components/SlideFrame'
import Code from '../components/Code'
import Ul from '../components/Ul'
import Sub from '../components/Sub'
import Cols from '../components/Cols'
import { SEC } from '../data/sections'

export default function Demo1InstallSlide() {
  return (
    <SlideFrame title="Demo 1: Cài đặt và bảo mật (1/2)" sec={SEC.demo}>
      <Cols layout="wide-right">
        <div>
          <Sub>Các bước</Sub>
          <Ul
            ordered
            items={[
              'Cài đặt `mysql-server`',
              'Chạy `mysql_secure_installation`: xử lý xác thực của root, xóa anonymous users, hạn chế root từ xa, xóa test database',
              'Đổi `bind-address` từ `127.0.0.1` sang `0.0.0.0` để MySQL nhận kết nối từ xa, rồi restart',
              'Kiểm tra cổng 3306 đã lắng nghe',
            ]}
          />
        </div>
        <Code>{`sudo apt update
    sudo apt install mysql-server -y
    sudo mysql_secure_installation

    sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
    #   bind-address = 127.0.0.1
    #   đổi thành: bind-address = 0.0.0.0

    sudo systemctl restart mysql
    sudo ss -lntp | grep 3306`}</Code>
      </Cols>
    </SlideFrame>
  )
}
