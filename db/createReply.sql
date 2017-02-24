insert into replies (content, message_id)
  values($1, $2)
RETURNING id, content, message_id
