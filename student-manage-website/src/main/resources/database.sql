drop database if exists student_manage;

create database student_manage;

use student_manage;

CREATE TABLE students (
      id BIGINT AUTO_INCREMENT PRIMARY KEY,
      first_name VARCHAR(255),
      last_name VARCHAR(255),
      email VARCHAR(255) NOT NULL UNIQUE
);

INSERT INTO students (first_name, last_name, email) VALUES
('Nguyễn', 'Văn An', 'nguyenvanan@example.com'),
('Trần', 'Thị Bảo', 'tranthibao@example.com'),
('Lê', 'Văn Cảnh', 'levancanh@example.com'),
('Phạm', 'Thị Dung', 'phamthidung@example.com'),
('Hoàng', 'Văn Hải', 'hoangvanhai@example.com'),
('Bùi', 'Thị Lan', 'buithilan@example.com'),
('Đặng', 'Văn Khoa', 'dangvankhoa@example.com'),
('Hồ', 'Thị Minh', 'hothiminh@example.com'),
('Dương', 'Văn Nam', 'duongvannam@example.com'),
('Lưu', 'Thị Phương', 'luuthiphuong@example.com');
