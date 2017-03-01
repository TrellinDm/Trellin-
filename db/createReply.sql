insert into replies (content, message_id, userid, first_name, picture)
  values($1, $2, $3, $4, $5)
RETURNING id, content, message_id, userid, first_name, picture
