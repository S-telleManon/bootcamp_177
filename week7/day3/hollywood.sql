Server [localhost]:
Database [postgres]:
Port [5432]:
Username [postgres]:
Password for user postgres:

psql (17.5)
WARNING: Console code page (437) differs from Windows code page (1252)
         8-bit characters might not work correctly. See psql reference
         page "Notes for Windows users" for details.
Type "help" for help.

postgres=# \l
                                                                List of databases
   Name    |  Owner   | Encoding | Locale Provider |        Collate         |         Ctype          | Locale | ICU Rules |   Access privileges
-----------+----------+----------+-----------------+------------------------+------------------------+--------+-----------+-----------------------
 bootcamp  | postgres | UTF8     | libc            | English_Mauritius.1252 | English_Mauritius.1252 |        |           |
 postgres  | postgres | UTF8     | libc            | English_Mauritius.1252 | English_Mauritius.1252 |        |           |
 public    | postgres | UTF8     | libc            | English_Mauritius.1252 | English_Mauritius.1252 |        |           |
 template0 | postgres | UTF8     | libc            | English_Mauritius.1252 | English_Mauritius.1252 |        |           | =c/postgres          +
           |          |          |                 |                        |                        |        |           | postgres=CTc/postgres
 template1 | postgres | UTF8     | libc            | English_Mauritius.1252 | English_Mauritius.1252 |        |           | =c/postgres          +
           |          |          |                 |                        |                        |        |           | postgres=CTc/postgres
(5 rows)


postgres=# \c bootcamp
You are now connected to database "bootcamp" as user "postgres".
bootcamp=# \l
                                                                List of databases
   Name    |  Owner   | Encoding | Locale Provider |        Collate         |         Ctype          | Locale | ICU Rules |   Access privileges
-----------+----------+----------+-----------------+------------------------+------------------------+--------+-----------+-----------------------
 bootcamp  | postgres | UTF8     | libc            | English_Mauritius.1252 | English_Mauritius.1252 |        |           |
 postgres  | postgres | UTF8     | libc            | English_Mauritius.1252 | English_Mauritius.1252 |        |           |
 public    | postgres | UTF8     | libc            | English_Mauritius.1252 | English_Mauritius.1252 |        |           |
 template0 | postgres | UTF8     | libc            | English_Mauritius.1252 | English_Mauritius.1252 |        |           | =c/postgres          +
           |          |          |                 |                        |                        |        |           | postgres=CTc/postgres
 template1 | postgres | UTF8     | libc            | English_Mauritius.1252 | English_Mauritius.1252 |        |           | =c/postgres          +
           |          |          |                 |                        |                        |        |           | postgres=CTc/postgres
(5 rows)


bootcamp=# \dt
           List of relations
 Schema |   Name    | Type  |  Owner
--------+-----------+-------+----------
 public | customers | table | postgres
 public | students  | table | postgres
(2 rows)


bootcamp=# create database hollywood
bootcamp-# create database hollywood;
ERROR:  syntax error at or near "create"
LINE 2: create database hollywood;
        ^
bootcamp=# \c
You are now connected to database "bootcamp" as user "postgres".
bootcamp=# CREATE TABLE hollywood;
ERROR:  syntax error at or near ";"
LINE 1: CREATE TABLE hollywood;
                              ^
bootcamp=# \l
                                                                List of databases
   Name    |  Owner   | Encoding | Locale Provider |        Collate         |         Ctype          | Locale | ICU Rules |   Access privileges
-----------+----------+----------+-----------------+------------------------+------------------------+--------+-----------+-----------------------
 bootcamp  | postgres | UTF8     | libc            | English_Mauritius.1252 | English_Mauritius.1252 |        |           |
 postgres  | postgres | UTF8     | libc            | English_Mauritius.1252 | English_Mauritius.1252 |        |           |
 public    | postgres | UTF8     | libc            | English_Mauritius.1252 | English_Mauritius.1252 |        |           |
 template0 | postgres | UTF8     | libc            | English_Mauritius.1252 | English_Mauritius.1252 |        |           | =c/postgres          +
           |          |          |                 |                        |                        |        |           | postgres=CTc/postgres
 template1 | postgres | UTF8     | libc            | English_Mauritius.1252 | English_Mauritius.1252 |        |           | =c/postgres          +
           |          |          |                 |                        |                        |        |           | postgres=CTc/postgres
(5 rows)


bootcamp=# CREATE DATABASE hollywood;
CREATE DATABASE
bootcamp=# \c hollywood
You are now connected to database "hollywood" as user "postgres".
hollywood=# CREATE TABLE actors(
hollywood(#  actor_id SERIAL PRIMARY KEY,
hollywood(#  first_name VARCHAR (50) NOT NULL,
hollywood(#  last_name VARCHAR (100) NOT NULL,
hollywood(#  age DATE NOT NULL,
hollywood(#  number_oscars SMALLINT NOT NULL
hollywood(# );
CREATE TABLE
hollywood=# INSERT INTO actors (first_name, last_name, age, number_oscars)
hollywood-# VALUES('Matt','Damon','08/10/1970', 5);
INSERT 0 1
hollywood=#
hollywood=# INSERT INTO actors (first_name, last_name, age, number_oscars)
hollywood-# VALUES('George','Clooney','06/05/1961', 2);
INSERT 0 1
hollywood=# SELECT * FROM actors;
 actor_id | first_name | last_name |    age     | number_oscars
----------+------------+-----------+------------+---------------
        1 | Matt       | Damon     | 1970-10-08 |             5
        2 | George     | Clooney   | 1961-05-06 |             2
(2 rows)


hollywood=# select sum(number_oscars) from actors;
 sum
-----
   7
(1 row)


hollywood=# select min(number_oscars) from actors;
 min
-----
   2
(1 row)


hollywood=# select max(number_oscars) from actors;
 max
-----
   5
(1 row)


hollywood=# select avg(number_oscars) from actors;
        avg
--------------------
 3.5000000000000000
(1 row)


hollywood=# CREATE TABLE employees (
hollywood(#     id INT PRIMARY KEY,
hollywood(#     name VARCHAR(50),
hollywood(#     nic VARCHAR(20),
hollywood(#     address VARCHAR(100),
hollywood(#     contactnumber VARCHAR(20),
hollywood(#     department VARCHAR(50),
hollywood(#     salary INT
hollywood(# );
CREATE TABLE
hollywood=# INSERT INTO employees (id, name, nic, address, contactnumber, department, salary) VALUES
hollywood-# (1, 'Nayar', '45324', 'Curepipe', '54354', 'tutoring', 20000),
hollywood-# (2, 'Abraham', '5432534', 'Floreal', '543', 'admin', 200000),
hollywood-# (3, 'Nirmal', '7657654', 'St-Pierre', '453432', 'tutoring', 50000),
hollywood-# (4, 'Jessni', '7657654', 'St-Pierre', '453432', 'admin', 25000),
hollywood-# (5, 'stelle', '7657650', 'Port-Louis', '45343432', 'marketing', 30000),
hollywood-# (6, 'yash', '345354', 'Grand Baie', '654543', 'marketing', 35000);
INSERT 0 6
hollywood=# INSERT INTO employees (id, name, nic, address, contactnumber, department, salary) VALUES
hollywood-# (7, 'yajnee', '23432423', 'Floreal', '654654', 'sales', 45000);
INSERT 0 1
hollywood=# select * from employees;
 id |  name   |   nic    |  address   | contactnumber | department | salary
----+---------+----------+------------+---------------+------------+--------
  1 | Nayar   | 45324    | Curepipe   | 54354         | tutoring   |  20000
  2 | Abraham | 5432534  | Floreal    | 543           | admin      | 200000
  3 | Nirmal  | 7657654  | St-Pierre  | 453432        | tutoring   |  50000
  4 | Jessni  | 7657654  | St-Pierre  | 453432        | admin      |  25000
  5 | stelle  | 7657650  | Port-Louis | 45343432      | marketing  |  30000
  6 | yash    | 345354   | Grand Baie | 654543        | marketing  |  35000
  7 | yajnee  | 23432423 | Floreal    | 654654        | sales      |  45000
(7 rows)


hollywood=# select count(name) from employees:
hollywood-# select count(name) from employees;
ERROR:  syntax error at or near ":"
LINE 1: select count(name) from employees:
                                         ^
hollywood=# select count(name) from employees;
 count
-------
     7
(1 row)


hollywood=# select count(name) from employees where salary > 100000;
 count
-------
     1
(1 row)


hollywood=# select max(salary) from employees;
  max
--------
 200000
(1 row)


hollywood=# select avg(salary) from employees;
        avg
--------------------
 57857.142857142857
(1 row)


hollywood=# select sum(salary) from employees;
  sum
--------
 405000
(1 row)


hollywood=# select department,sum(salary) from employees GROUP BY DEPARTMENT;
 department |  sum
------------+--------
 tutoring   |  70000
 marketing  |  65000
 admin      | 225000
 sales      |  45000
(4 rows)


hollywood=# select department,min(salary) from employees GROUP BY DEPARTMENT;
 department |  min
------------+-------
 tutoring   | 20000
 marketing  | 30000
 admin      | 25000
 sales      | 45000
(4 rows)


hollywood=#
