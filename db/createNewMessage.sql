insert into messages ( userid, messageid, message, listid, type)
VALUES ($1,$2,$3,$4,$5)
RETURNING id, userid, messageid, message, listid, type
