INSERT INTO cards (content, list_id)
VALUES($1, $2)
RETURNING id, content, list_id
