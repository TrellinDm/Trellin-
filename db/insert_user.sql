insert into users (userid, display_name, picture, email)
  values($1, $2, $3, $4)
  returning id, userid, display_name, picture, email
