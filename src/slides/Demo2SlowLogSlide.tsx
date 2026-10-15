import SlideFrame from '../components/SlideFrame'
import Code from '../components/Code'
import Ul from '../components/Ul'
import Sub from '../components/Sub'
import Cols from '../components/Cols'
import { SEC } from '../data/sections'

export default function Demo2SlowLogSlide() {
  return (
    <SlideFrame title="Demo 2: Phân tích truy vấn chậm" sec={SEC.demo}>
      <Cols layout="wide-right">
        <div>
          <Sub>Các bước</Sub>
          <Ul
            ordered
            items={[
              'Thêm 3 dòng cấu hình slow log vào cuối `mysqld.cnf`, restart dịch vụ',
              'Kiểm tra MySQL đã nạp cấu hình',
              'Chạy truy vấn cố tình chậm (`SELECT SLEEP(3)`, vượt ngưỡng 2 giây)',
              'Phân tích log bằng `mysqldumpslow`',
            ]}
          />
          <Sub>Liên hệ lý thuyết</Sub>
          <Ul items={['`slow_query_log`, `long_query_time`', '`-s t -t 5`: top 5 theo query time']} />
        </div>
        <Code>{`# thêm vào cuối /etc/mysql/mysql.conf.d/mysqld.cnf
    slow_query_log = 1
    slow_query_log_file = /var/log/mysql/mysql-slow.log
    long_query_time = 2

    sudo systemctl restart mysql
    sudo mysql -e "SHOW VARIABLES LIKE 'slow_query_log%';"
    sudo mysql -e "SHOW VARIABLES LIKE 'long_query_time';"

    sudo mysql -e "SELECT SLEEP(3);"
    sudo mysqldumpslow -s t -t 5 /var/log/mysql/mysql-slow.log`}</Code>
      </Cols>
    </SlideFrame>
  )
}
