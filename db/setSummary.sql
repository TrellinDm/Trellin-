insert into summary (id, summary)
values ($1, $2)
returning *;
