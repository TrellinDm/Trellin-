insert into replies (content, message_id, userid, first_name, last_name)
  values($1, $2, $3, $4, $5)
RETURNING id, content, message_id, userid, first_name, last_name
