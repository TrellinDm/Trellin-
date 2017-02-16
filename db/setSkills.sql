insert into awards (id, skill)
values ($1, $2);
returning *;
