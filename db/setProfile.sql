update users
set first = $2, last = $3, headline = $4, location = $5, industry = $6, picture = $7
where id = $1
returning *;
