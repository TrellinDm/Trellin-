insert into courses (id, name, course_no, associated)
values ($1, $2, $3, $4)
returning *;
