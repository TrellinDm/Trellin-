select * from user_info
inner join connections
on user_info.id = connections.connection_id
where connections.id = $1;
