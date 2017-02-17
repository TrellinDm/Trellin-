insert into education (id, school, degree, field, grade, activities, begdate, enddate)
values ($1, $2, $3, $4, $5, $6, $7, $8)
returning *;
