drop database if exists employee_manage;
create database employee_manage;

use employee_manage;

CREATE TABLE employees (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email_id VARCHAR(255) NOT NULL UNIQUE
);

INSERT INTO employees (first_name, last_name, email_id) VALUES
('Hoàng', 'Minh Đức', 'minhduc.hoang@gmail.com'),
('Trần', 'Khánh Linh', 'khanhlinh.tran@gmail.com'),
('Nguyễn', 'Thị Thu Hà', 'thuha.nguyen@gmail.com'),
('Phạm', 'Văn Khoa', 'vankhoa.pham@gmail.com'),
('Lê', 'Thị Hương', 'thihuong.le@gmail.com'),
('Vũ', 'Đức Anh', 'ducanh.vu@gmail.com'),
('Đỗ', 'Minh Tuấn', 'minhtuan.do@gmail.com'),
('Bùi', 'Thị Lan', 'thilan.bui@gmail.com'),
('Dương', 'Văn Thanh', 'vanthanh.duong@gmail.com'),
('Mai', 'Thị Phương', 'thiphuong.mai@gmail.com');