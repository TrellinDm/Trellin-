insert into skills (id, skill)
values ($1, $2)
returning *;
