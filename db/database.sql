create table employees(
    id int(45) NOT NULL auto_increment primary key,
    name varchar(255) default NULL,
    salary int(5) default NULL,
)
insert into employees(name, salary) values('','');