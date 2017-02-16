insert into awards (id, title, company, begdate, enddate, current, description)
values ($1, $2, $3, $4, $5, $6, $7);
returning *;
