insert into messages ( userid, messageid, message, listid, type, first_name, picture)
VALUES ($1,$2,$3,$4,$5, $6, $7)
RETURNING id, userid, messageid, message, listid, type, first_name, picture
