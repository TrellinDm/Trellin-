select * from users
inner join connections
on users.id = connections.connection_id;