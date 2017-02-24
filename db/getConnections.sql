select * from users
inner join connections
on users.id = connections.id
where users.id = $1;
