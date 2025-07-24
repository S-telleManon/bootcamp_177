Server [localhost]:
Database [postgres]: bootcamp
Port [5432]:
Username [postgres]:
Password for user postgres:

psql (17.5)
WARNING: Console code page (437) differs from Windows code page (1252)
         8-bit characters might not work correctly. See psql reference
         page "Notes for Windows users" for details.
Type "help" for help.

bootcamp=# SELECT * FROM students;
 id | first_name | last_name | birth_date
----+------------+-----------+------------
  1 | Marc       | Benichou  | 1998-11-02
  2 | Yoan       | Cohen     | 2010-12-03
  3 | Lea        | Benichou  | 1987-07-27
  4 | Amelia     | Dux       | 1996-04-07
  5 | David      | Grez      | 2003-06-14
  6 | Omer       | Simpson   | 1980-10-03
(6 rows)


bootcamp=# SELECT first_name AND last_name FROM students WHERE id=2;
ERROR:  argument of AND must be type boolean, not type character varying
LINE 1: SELECT first_name AND last_name FROM students WHERE id=2;
               ^
bootcamp=# SELECT first_name FROM students first_name LIKE'%a%';
ERROR:  syntax error at or near "LIKE"
LINE 1: SELECT first_name FROM students first_name LIKE'%a%';
                                                   ^
bootcamp=# \o output_students.sql
output_students.sql: Permission denied
bootcamp=# SELECT first_name FROM students;
 first_name
------------
 Marc
 Yoan
 Lea
 Amelia
 David
 Omer
(6 rows)


bootcamp=# SELECT last_name FROM students;
 last_name
-----------
 Benichou
 Cohen
 Benichou
 Dux
 Grez
 Simpson
(6 rows)


bootcamp=# SELECT * FROM students WHERE id =2;
 id | first_name | last_name | birth_date
----+------------+-----------+------------
  2 | Yoan       | Cohen     | 2010-12-03
(1 row)


bootcamp=# SELECT first_name,last_name FROM students where id =2;
 first_name | last_name
------------+-----------
 Yoan       | Cohen
(1 row)


bootcamp=# SELECT first_name,last_name FROM students where last_name='Benichou' OR first_name='Marc';
 first_name | last_name
------------+-----------
 Marc       | Benichou
 Lea        | Benichou
(2 rows)


bootcamp=# SELECT first_name,last_name FROM students where last_name='Benichou' AND first_name='Marc';
 first_name | last_name
------------+-----------
 Marc       | Benichou
(1 row)


bootcamp=# SELECT first_name,last_name FROM students where first_name LIKE '%a%';
 first_name | last_name
------------+-----------
 Marc       | Benichou
 Yoan       | Cohen
 Lea        | Benichou
 Amelia     | Dux
 David      | Grez
(5 rows)


bootcamp=# SELECT first_name,last_name FROM students where first_name LIKE 'A%';
 first_name | last_name
------------+-----------
 Amelia     | Dux
(1 row)


bootcamp=# SELECT first_name,last_name FROM students where first_name LIKE '%a';
 first_name | last_name
------------+-----------
 Lea        | Benichou
 Amelia     | Dux
(2 rows)


bootcamp=# SELECT first_name,last_name FROM students where first_name LIKE '_%a%';
 first_name | last_name
------------+-----------
 Marc       | Benichou
 Yoan       | Cohen
 Lea        | Benichou
 Amelia     | Dux
 David      | Grez
(5 rows)


bootcamp=# SELECT first_name,last_name FROM students where id=1 AND id=3;
 first_name | last_name
------------+-----------
(0 rows)


bootcamp=# SELECT first_name,last_name FROM students where birth_date >= '2000-01-01';
 first_name | last_name
------------+-----------
 Yoan       | Cohen
 David      | Grez
(2 rows)


bootcamp=# SELECT first_name,last_name,birth_date FROM students where birth_date >= '2000-01-01';
 first_name | last_name | birth_date
------------+-----------+------------
 Yoan       | Cohen     | 2010-12-03
 David      | Grez      | 2003-06-14
(2 rows)


bootcamp=#
