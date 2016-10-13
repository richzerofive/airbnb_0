create sequence seq2
increment by 1
start with 1000
nocycle;
==============================================
create table book(
	seq2 number constraint book_pk primary key,
	address varchar2(100),
	check_in varchar2(20),
	check_out varchar2(20),
	explain varchar2(1000),
	review varchar2(500),
	price varchar2(50),
	option2 varchar2(50),
	local2 varchar2(100),
	facilities varchar2(500),
	policy varchar2(100),
	house_type varchar2(20),
	language varchar2(20),
	photo varchar2(50),
	room number,
	toilet number,
	bed number,
	count number,
	id varchar2(20),
	constraint book_member_fk foreign key (id)
	references member(id) on delete cascade
);
==============================================
create view book_member as
select 
	b.seq2,
	b.address,
	b.check_in,
	b.check_out,
	b.explain,
	b.review,
	b.price,
	b.option2,
	b.local2,
	b.facilities,
	b.policy,
	b.house_type,
	b.language,
	b.photo,
	b.room,
	b.toilet,
	b.bed,
	b.count,
	m.id
from member m, book b
where m.id = b.id;
===========================================================
delete from book_member where id = 'hong';
select * from book_member;
select * from book_member where address = '서울시,마포구,상암동,월드컵 APT';
