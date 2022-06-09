CREATE DATABASE emp_directory;

USE emp_directory;

CREATE TABLE department(
   ID int NOT NULL AUTO_INCREMENT,
   dept_name VARCHAR(30) NOT NULL,
   PRIMARY KEY(id)
);

CREATE TABLE emp_role(
   ID int NOT NULL AUTO_INCREMENT,
   title VARCHAR(30) NOT NULL,
   salary DECIMAL(8,2) NOT NULL,
   dept_id int NOT NULL,
   PRIMARY KEY(id)
);


CREATE TABLE employee(
   ID int NOT NULL AUTO_INCREMENT,
   first_name VARCHAR(30) NOT NULL,
   last_name VARCHAR(30) NOT NULL,
   role_id int NOT NULL
   manager_id int NULL,
   PRIMARY KEY(id)
);

INSERT INTO department (dept_name) values ('IT', 'Human Resources', 'Marketing', 'Legal','Operations');

INSERT INTO emp_role (title, salary, dept_id) values ('Informatics Director', 90000, 1), ('Enterprise Architect', 55000, 1), ('HR Director', 90000, 2),('DEI Specialist', 55000, 2),
('Marketing Director', 85000, 3),('Marketing Analyst', 52000, 3),('Chief Legal Officer', 120000, 4),('Legal Analyst', 72000, 4),('Site Operations Head', 80000, 5),('Operations Manager', 60000, 5)

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Akin', 'Peter', 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jon', 'Jones', 2, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Ricardo', 'Kaka', 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Steph', 'Curry', 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Alex', 'Kobayashi', 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Michael', 'Jordan', 2, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Yemisi', 'Odusi', 3, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Bola', 'Ososanya', 4, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Kiki', 'Drake', 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Lebron', 'James', 2, 3);
