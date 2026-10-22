-- Khởi tạo database và dữ liệu mẫu phục vụ thực hành các slide
CREATE DATABASE IF NOT EXISTS demo_db;
USE demo_db;

-- 1. Bảng users (Dùng cho Demo 1 và Demo 3 - Sao lưu / Phục hồi)
CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name) VALUES 
  ('Alice'),
  ('Bob'),
  ('Charlie');

-- 2. Bảng account (Dùng cho Slide 20 - Transaction, Commit và Rollback)
CREATE TABLE IF NOT EXISTS account (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  balance DECIMAL(10, 2) NOT NULL
);

INSERT INTO account (name, balance) VALUES
  ('Tài khoản A', 1000.00),
  ('Tài khoản B', 500.00);

-- 3. Tạo user demo từ xa và phân quyền (Slide 29 - Demo 1)
CREATE USER IF NOT EXISTS 'demo'@'%' IDENTIFIED BY 'demopasswd';
GRANT SELECT, INSERT, UPDATE, DELETE ON demo_db.* TO 'demo'@'%';
FLUSH PRIVILEGES;

-- 4. Bảng orders (Dùng cho Case Study Slow Log: Tra cứu lịch sử đơn hàng)
CREATE TABLE IF NOT EXISTS orders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  order_code VARCHAR(50) NOT NULL,
  total_amount DECIMAL(12, 2) NOT NULL,
  status VARCHAR(20) DEFAULT 'COMPLETED',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO orders (user_id, order_code, total_amount, status, created_at) VALUES
  (1002, 'ORD-2026-001', 250000.00, 'COMPLETED', NOW() - INTERVAL 10 DAY),
  (1002, 'ORD-2026-002', 450000.00, 'COMPLETED', NOW() - INTERVAL 5 DAY),
  (1002, 'ORD-2026-003', 1200000.00, 'COMPLETED', NOW() - INTERVAL 1 DAY),
  (1001, 'ORD-2026-004', 350000.00, 'COMPLETED', NOW() - INTERVAL 2 DAY),
  (1003, 'ORD-2026-005', 780000.00, 'COMPLETED', NOW() - INTERVAL 3 DAY);

