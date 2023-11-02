CREATE DATABASE foundation_exam;
USE foundation_exam;

CREATE TABLE movie_info (
	Movie_ID INTEGER PRIMARY KEY,
    Movie_Name VARCHAR(100),
    Movie_Length VARCHAR(100), 
    Age_Rating VARCHAR(50)
);

CREATE TABLE screens (
	Screen_ID INTEGER PRIMARY KEY, 
    Four_K VARCHAR(50)
);

CREATE TABLE showings (
	Showing_ID INTEGER PRIMARY KEY,
    Movie_ID INTEGER, 
    Screen_ID INTEGER, 
    Start_Time TIME, 
    Available_Seats INTEGER,
    FOREIGN KEY (Movie_ID) REFERENCES movie_info(Movie_ID), 
    FOREIGN KEY (Screen_ID) REFERENCES screens(Screen_ID)
);

USE foundation_exam;

INSERT INTO movie_info(movie_ID, movie_name, movie_length, age_rating)
VALUES 
 (1, "The Movie", "2:19:00", "12A"),
 (2, "The Other Movie", "1:30:00", "15"),
 (3, "The 3D Amazing Movie",  "1:42:00", "PG"),
 (4, "La Allure", "1:09:00", "18"),
 (5, "The Cartoon", "1:15:00", "U"),
 (6, "The Scary Cartoon", "1:23:00", "PG"),
 (7, "The Coming Of Age", "1:40:00", "12A"),
 (8, "The War", "2:07:00", "15"),
 (9, "The Murder Mystery", "1:47:00", "15");

INSERT INTO screens(screen_ID, four_k)
VALUES 
  (1, True),
  (2, False),
  (3, True),
  (4, True),
  (5, True),
  (6, True),
  (7, True),
  (8, False),
  (9, True),
  (10, True);

INSERT INTO showings(showing_ID, movie_ID,screen_ID, start_time, available_seats)
VALUES 
	(1, 1, 2, '12:00:00', 10), 
  (2, 1, 2, '17:00:00', 23), 
  (3, 2, 9, '10:30:00', 30), 
  (4, 3, 1, '07:00:00', 38), 
  (5, 3, 5, '10:00:00', 26), 
  (6, 3, 1, '17:00:00', 5), 
  (7, 3, 1, '19:00:00', 0), 
  (8, 3, 5, '14:00:00', 2), 
  (9, 4, 9, '20:00:00', 14), 
  (10, 4, 9, '23:00:00', 23), 
  (11, 5, 6, '09:30:00', 30), 
  (12, 5, 6, '12:30:00', 7), 
  (13, 5, 6, '14:30:00', 0), 
  (14, 5, 6, '15:20:00', 0), 
  (15, 6, 10, '10:00:00', 32), 
  (16, 6, 10, '13:30:00', 25), 
  (17, 6, 10, '17:00:00', 14), 
  (18, 7, 7, '12:00:00', 36), 
  (19, 8, 4, '15:00:00', 24), 
  (20, 9, 3, '17:00:00', 0);
  
-- SECTION 4.2
-- A query to identify all the movies playing after 12:00 that have at least one ticket available 
SELECT mov.Movie_Name,sho.Start_Time
FROM movie_info AS mov
INNER JOIN showings AS sho ON mov.Movie_ID = sho.Movie_ID
WHERE
sho.Start_Time BETWEEN '12:00:00' AND '23:59:59'
AND sho.Available_Seats > 1
ORDER BY sho.Start_Time ASC;

-- SECTION 4.3
-- A query to show the movie with the highest number of showings
SELECT mov.Movie_Name
FROM movie_info AS mov
INNER JOIN showings AS sho ON mov.Movie_ID = sho.Movie_ID
GROUP BY sho.Movie_ID
ORDER BY COUNT(sho.Movie_ID) DESC
LIMIT 1;

