insert into replies (content, message_id, userid)
  values($1, $2, $3)
RETURNING id, content, message_id, userid
