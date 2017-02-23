insert into awards (id, title, associated, issuer, recieved, description)
values ($1, $2, $3, $4, $5, $6)
returning *;
