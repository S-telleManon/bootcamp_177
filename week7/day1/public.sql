-- Database: public

-- DROP DATABASE IF EXISTS public;

CREATE DATABASE public
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_Mauritius.1252'
    LC_CTYPE = 'English_Mauritius.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
select * from customers;
select * from items;
select item_description from items where item_price >80;
select item_description from items where item_price <=300;
select first_name from customers where last_name = 'Smith';
select first_name from customers where last_name = 'Jones';
select first_name from customers where first_name <> 'Scott';




