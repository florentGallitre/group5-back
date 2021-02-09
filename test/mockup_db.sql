DROP TABLE IF EXISTS `FilmMaker`;
CREATE TABLE FilmMaker
(
    id int AUTO_INCREMENT PRIMARY KEY NOT NULL, 
    firstname varchar(75) NOT NULL, 
    lastname varchar(75) NOT NULL
);

DROP TABLE IF EXISTS `Genre`;
CREATE TABLE Genre
(
    id int AUTO_INCREMENT PRIMARY KEY NOT NULL, 
    genre varchar(50) NOT NULL
);

DROP TABLE IF EXISTS `Movie`;
CREATE TABLE Movie 
(
    id int AUTO_INCREMENT PRIMARY KEY NOT NULL, 
    title varchar(100) NOT NULL, 
    summary varchar(255) NOT NULL,
    time int,
    releaseDate varchar(15),
    filmMaker_Id int NOT NULL,
	CONSTRAINT FK_FilmMaker_Id
		FOREIGN KEY (filmMaker_Id)
		REFERENCES FilmMaker(Id)
			ON DELETE CASCADE
);

DROP TABLE IF EXISTS `Movie_Genre`;
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

INSERT INTO `FilmMaker` (`id`, `firstname`, `lastname`)
VALUES
	(1,'Rian','Johnsson'),
	(2,'Studio','Ghibli'),
	(3,'Joss','Whedon');

INSERT INTO `Movie` (`id`, `title`, `summary`, `time`, `releaseDate`, `filmMaker_Id`)
VALUES
	(1,'Knives out','summary 1',130, '2019', 1),
	(2,'Avenger','summary 2', 140, '2012', 3),
	(3,'Edward','le voyage de Chihiro','summary 3', 78, '2002',2);