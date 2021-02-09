CREATE DATABASE Movies;
Use Movies;
CREATE TABLE Movie (id int AUTO_INCREMENT PRIMARY KEY NOT NULL, name varchar(100), filmmaker varchar(100), time int, releaseDate DATETIME);