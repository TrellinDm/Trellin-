insert into awards (id, school, begdate, enddate, field, grade, activities, description)
values ($1, $2, $3, $4, $5, $6, $7, $8);
returning *;
