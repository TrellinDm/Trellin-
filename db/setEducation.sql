insert into education (id, school, begdate, enddate, degree, field, grade, activities)
values ($1, $2, $3, $4, $5, $6, $7, $8)
returning *;
