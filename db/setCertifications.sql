insert into certifications (id, name, authority, license_no, certification_url, begdate, enddate)
values ($1, $2, $3, $4, $5, $6, $7)
returning *;
