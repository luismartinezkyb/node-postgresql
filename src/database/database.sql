alter user postgres with password '1234';


CREATE DATABASE firstapi;


CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email TEXT
);


INSERT INTO users(name, email) VALUES ('John', 'Johnibt@gmail.com'), ('Luis', 'Luis@gmail.com');