insert into personal (id, birthday, marital)
values ($1, $2, $3)
returning *;
