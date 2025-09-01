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

postgres=# CREATE TABLE FirstTab (
postgres(#      id integer,
postgres(#      name VARCHAR(10)
postgres(# )
postgres-#
postgres-# INSERT INTO FirstTab VALUES
postgres-# (5,'Pawan'),
postgres-# (6,'Sharlee'),
postgres-# (7,'Krish'),
postgres-# (NULL,'Avtaar')
postgres-#
postgres-# SELECT * FROM FirstTab
postgres-#
postgres-# CREATE TABLE SecondTab (
postgres(#     id integer
postgres(# )
postgres-#
postgres-# INSERT INTO SecondTab VALUES
postgres-# (5),
postgres-# (NULL)
postgres-#
postgres-#
postgres-# SELECT * FROM SecondTab
postgres-#
postgres-#
postgres-#
postgres-#
postgres-#
postgres-# CREATE TABLE FirstTab (
postgres(#      id integer,
postgres(#      name VARCHAR(10)
postgres(# )
postgres-# ;
ERROR:  syntax error at or near "INSERT"
LINE 5: INSERT INTO FirstTab VALUES
        ^
postgres=# CREATE TABLE FirstTab (
postgres(#      id integer,
postgres(#      name VARCHAR(10)
postgres(# );
CREATE TABLE
postgres=# INSERT INTO FirstTab VALUES
postgres-# (5,'Pawan'),
postgres-# (6,'Sharlee'),
postgres-# (7,'Krish'),
postgres-# (NULL,'Avtaar');
INSERT 0 4
postgres=# SELECT * FROM FirstTab;
 id |  name
----+---------
  5 | Pawan
  6 | Sharlee
  7 | Krish
    | Avtaar
(4 rows)


postgres=# CREATE TABLE SecondTab (
postgres(#     id integer
postgres(# );
CREATE TABLE
postgres=# INSERT INTO SecondTab VALUES
postgres-# (5),
postgres-# (NULL);
INSERT 0 2
postgres=# SELECT * FROM SecondTab;
 id
----
  5

(2 rows)


postgres=#  SELECT COUNT(*);
 count
-------
     1
(1 row)


postgres=# FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL
postgres(# ;
postgres(#
postgres(#
postgres(#
postgres(# FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL);
postgres(#  SELECT COUNT(*)
postgres(# FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL);
postgres(#
postgres(#
postgres(#
postgres(#
postgres(#
postgres(# select * from SecondTab
postgres(# select * from SecondTab;
postgres(# )
postgres-# ;
ERROR:  syntax error at or near "FROM"
LINE 1: FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM Seco...
        ^
postgres=#  SELECT COUNT(*)
postgres-# FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL);
 count
-------
     0
(1 row)


postgres=#  SELECT COUNT(*)
postgres-# FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 );
 count
-------
     2
(1 row)


postgres=#  SELECT COUNT(*)
postgres-# FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab );
 count
-------
     0
(1 row)


postgres=#  SELECT COUNT(*)
postgres-# FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL );
 count
-------
     2
(1 row)


postgres=#
