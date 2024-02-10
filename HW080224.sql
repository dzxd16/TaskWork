use gt220823;

create table student(
	firstname varchar(128) not null,
    lastname varchar(128) not null,
    age integer,
    subject varchar(128) not null,
    mark numeric(2,1) check (mark between 0 and 5)
    );

alter table student
add column id  integer primary key auto_increment not null first;
    
alter table student
modify column mark int;

alter table student
drop age;


alter table student
add column class integer check (class between 1 and 10 ) after lastname;

insert into student(firstname, lastname, mark, subject, class)
values 
	('Jon', 'Smitt', 2, '',1),
    ('Joan', 'Smeett', 3, '',1),
    ('Hon', 'Smeet', 0, '',2),
    ('Han', 'Smot', 5, '',2),
    ('Jim', 'Jim', 4, '',3),
    ('Jeem', 'Witt', 3, '',3),
    ('Can', 'Weit', 2, '',4),
    ('Con', 'Old', 1, '',4),
    ('Fan', 'Pen', 0, '',5),
    ('Fen', 'Smitt', 2, '',5)
    ;

-- update student
delete from student where mark = 0;

select * from student
where mark > 3;    

select * from student
where mark < 3 and class = 1 ;   

delete from student
where mark < 3 and class = 1 ;   
 
 select * from student
 where length(firstname) > 4;
 
select * from student
 where length(lastname) > 2 and lastname like 'a%';
 
 drop table student;