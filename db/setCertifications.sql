insert into awards (id, name, authority, license_no, certification_url, begdate, enddate, expire)
values ($1, $2, $3, $4, $5, $6, $7, $8);
returning *;
