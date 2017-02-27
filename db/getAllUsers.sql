select * from users
where users.id != $1
order by first asc;
