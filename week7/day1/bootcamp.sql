-- Database: bootcamp

-- DROP DATABASE IF EXISTS bootcamp;

CREATE DATABASE bootcamp
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_Mauritius.1252'
    LC_CTYPE = 'English_Mauritius.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
Create Table students(
id Serial primary key,
first_name Varchar(50) not null,
last_name Varchar(50) not null,
birth_date date);
select * from students
INSERT INTO students(first_name,last_name,birth_date)
VALUES('Marc','Benichou','02/11/1998');

SELECT first_name FROM students;
SELECT last_name FROM students;
SELECT * FROM students WHERE id =2;
SELECT first_name,last_name FROM students where id =2;
SELECT first_name,last_name FROM students where last_name='Benichou' OR first_name='Marc';
SELECT first_name,last_name FROM students where last_name='Benichou' AND first_name='Marc';
SELECT first_name,last_name FROM students where first_name LIKE '%a%';
SELECT first_name,last_name FROM students where first_name LIKE 'A%';
SELECT first_name,last_name FROM students where first_name LIKE '%a';
SELECT first_name,last_name FROM students where first_name LIKE '_%a%';
SELECT first_name,last_name FROM students where id=1 AND id=3;
SELECT first_name,last_name FROM students where birth_date >= '2000-01-01';