create table Cards (id SERIAL PRIMARY KEY, content text, comment text, list_id INTEGER REFERENCES lists);
