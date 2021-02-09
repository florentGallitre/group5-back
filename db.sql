CREATE DATABASE Movies;
Use Movies;

CREATE TABLE FilmMaker
(
    id int AUTO_INCREMENT PRIMARY KEY NOT NULL, 
    firstname varchar(75) NOT NULL, 
    lastname varchar(75) NOT NULL
);

CREATE TABLE Genre
(
    id int AUTO_INCREMENT PRIMARY KEY NOT NULL, 
    genre varchar(50) NOT NULL
);

CREATE TABLE Movie 
(
    id int AUTO_INCREMENT PRIMARY KEY NOT NULL, 
    title varchar(100) NOT NULL, 
    summary varchar(255) NOT NULL,
    releaseDate varchar(15),
    filmMaker_Id int NOT NULL,
	CONSTRAINT FK_FilmMaker_Id
		FOREIGN KEY (filmMaker_Id)
		REFERENCES FilmMaker(Id)
			ON DELETE CASCADE
);

CREATE TABLE Movie_Genre
(
    id int AUTO_INCREMENT PRIMARY KEY NOT NULL, 
    Movie_Id INT NOT NULL,
    Genre_Id INT NOT NULL,
    CONSTRAINT FK_Movie_Id__Movie
		FOREIGN KEY (Movie_Id)
		REFERENCES Movie (Id)
			ON DELETE CASCADE,
	CONSTRAINT FK_Genre_Id__Genre
		FOREIGN KEY (Genre_Id)
		REFERENCES Genre (Id)
            ON DELETE CASCADE
);