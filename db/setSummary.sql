insert into awards (id, summary)
values ($1, $2);
returning *;
