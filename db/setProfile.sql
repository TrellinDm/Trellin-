update users
set first = $2, last = $3, headline = $4, location = $5, industry = $6
where id = $1
returning *;
