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

bootcamp=# select * from students;
 id | first_name | last_name | birth_date
----+------------+-----------+------------
  1 | Marc       | Benichou  | 1998-11-02
  2 | Yoan       | Cohen     | 2010-12-03
  3 | Lea        | Benichou  | 1987-07-27
  4 | Amelia     | Dux       | 1996-04-07
  5 | David      | Grez      | 2003-06-14
  6 | Omer       | Simpson   | 1980-10-03
(6 rows)


bootcamp=# SELECT first_name,last_name FROM students where birth_date >= '2000-01-01';
 first_name | last_name
------------+-----------
 Yoan       | Cohen
 David      | Grez
(2 rows)


bootcamp=# SELECT first_name,last_name,birth_date FROM students order by last_name ASC;
 first_name | last_name | birth_date
------------+-----------+------------
 Marc       | Benichou  | 1998-11-02
 Lea        | Benichou  | 1987-07-27
 Yoan       | Cohen     | 2010-12-03
 Amelia     | Dux       | 1996-04-07
 David      | Grez      | 2003-06-14
 Omer       | Simpson   | 1980-10-03
(6 rows)


bootcamp=# SELECT first_name,last_name,birth_date FROM students order by birth_date DESC LIMIT 1;
 first_name | last_name | birth_date
------------+-----------+------------
 Yoan       | Cohen     | 2010-12-03
(1 row)


bootcamp=# SELECT first_name,last_name,birth_date FROM students lIMIT 3 OFFSET 2;
 first_name | last_name | birth_date
------------+-----------+------------
 Lea        | Benichou  | 1987-07-27
 Amelia     | Dux       | 1996-04-07
 David      | Grez      | 2003-06-14
(3 rows)


bootcamp=#
