insert into experience (id, title, company, begdate, enddate, current, description)
values ($1, $2, $3, $4, $5, $6, $7)
returning *;
