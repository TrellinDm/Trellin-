insert into language (id, language, proficiency)
values ($1, $2, $3)
returning *;
