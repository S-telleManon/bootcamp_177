Server [localhost]:
Database [postgres]: public
Port [5432]:
Username [postgres]:
Password for user postgres:

psql (17.5)
WARNING: Console code page (437) differs from Windows code page (1252)
         8-bit characters might not work correctly. See psql reference
         page "Notes for Windows users" for details.
Type "help" for help.

public=# SELECT * FROM public;
ERROR:  relation "public" does not exist
LINE 1: SELECT * FROM public;
                      ^
public=# SELECT * FROM customers;
 customer_id | first_name | last_name
-------------+------------+-----------
           1 | Greg       | Jones
           2 | Sandra     | Jones
           3 | Scott      | Scott
           4 | Trevor     | Green
           5 | Melanie    | Johnson
(5 rows)


public=# select * from customers;
 customer_id | first_name | last_name
-------------+------------+-----------
           1 | Greg       | Jones
           2 | Sandra     | Jones
           3 | Scott      | Scott
           4 | Trevor     | Green
           5 | Melanie    | Johnson
(5 rows)


public=# select * from items;
 item_id | item_description | item_price
---------+------------------+------------
       1 | Small Desk       |        100
       2 | Large Desk       |        300
       3 | Fan              |         80
(3 rows)


public=# select item_description from items where item_price >80;
 item_description
------------------
 Small Desk
 Large Desk
(2 rows)


public=# select item_description from items where item_price <=300;
 item_description
------------------
 Small Desk
 Large Desk
 Fan
(3 rows)


public=# select first_name from customers where last_name = 'Smith';
 first_name
------------
(0 rows)


public=# select first_name from customers where last_name = 'Jones';
 first_name
------------
 Greg
 Sandra
(2 rows)


public=# select first_name from customers where first_name <> 'Scott';
