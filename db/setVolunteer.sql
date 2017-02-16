insert into awards (id, organization, role, cause, begdate, enddate, current, description)
values ($1, $2, $3, $4, $5, $6, $7, $8);
returning *;
