import SlideFrame from '../components/SlideFrame'
import Code from '../components/Code'
import Note from '../components/Note'
import Sub from '../components/Sub'
import Cols from '../components/Cols'
import Stack from '../components/Stack'
import { SEC } from '../data/sections'

export default function Demo1UserSlide() {
  return (
    <SlideFrame title="Demo 1: Tạo user từ xa và kiểm tra phân quyền (2/2)" sec={SEC.demo}>
      <Cols>
        <Stack>
          <Sub>Trên máy ảo: tạo database và user</Sub>
          <Code>{`CREATE DATABASE demo_db;
    USE demo_db;
    CREATE TABLE users (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(100)
    );
    INSERT INTO users(name)
      VALUES ('Alice'), ('Bob');

    CREATE USER 'demo'@'CLIENT_IP'
      IDENTIFIED BY 'demopasswd';
    GRANT SELECT, INSERT, UPDATE, DELETE
      ON demo_db.* TO 'demo'@'CLIENT_IP';
    SHOW GRANTS FOR 'demo'@'CLIENT_IP';`}</Code>
        </Stack>
        <Stack>
          <Sub>Trên máy Client: kiểm tra</Sub>
          <Code>{`mysql -h <VM_IP> -u demo -p

    SELECT USER(), CURRENT_USER();
    SHOW DATABASES;
    USE demo_db;
    SELECT * FROM users;
    -- thành công

    CREATE DATABASE test_db;
    -- bị từ chối (ACCESS DENIED)`}</Code>
          <Note>
            User `demo` chỉ đăng nhập được từ `CLIENT_IP` và chỉ có quyền trên `demo_db`: minh họa
            `'user'@'host'` và least privilege.
          </Note>
        </Stack>
      </Cols>
    </SlideFrame>
  )
}
