INSERT INTO lists (title)
VALUES($1)
RETURNING id, title
