-- @block
-- purple letters KEYWORDS. Statement does something and ends with. users = identifier ;
CREATE TABLE users(

   -- INT store whole numbers, PRIMARY KEY - identify unique row
   id INT PRIMARY KEY AUTO_INCREMENT,
   -- variable character - max length of string. 255 max characters of 8bit number
   email VARCHAR(255) NOT NULL UNIQUE,
   -- unpadded strings
   bio TEXT,
   country VARCHAR(2)
)

-- @block
INSERT INTO users (email, bio, country)
VALUES (
   'hello@world.com',
   'welcome to this airbnb',
   'NZ'
);

-- @block
INSERT INTO users (email, bio, country) 
VALUES 
   ('bob@bob.com', 'bobbytown','US'),
   ('rob@bob.com', 'robsville','CA'),
   ('cob@bob.com', 'cob county','MX');

-- @block
SELECT * FROM users;

-- @block
SELECT email,id FROM users 
WHERE country = 'NZ' 
-- OR country ='US'
AND email LIKE 'hello%'
ORDER BY id ASC
LIMIT 3;

-- @block
CREATE INDEX email_index ON users(email);

-- @block
CREATE TABLE rooms (
   -- primary key
   id INT AUTO_INCREMENT,
   street VARCHAR(255),
   -- foreign key
   owner_id INT NOT NULL,
   PRIMARY KEY (id),
   -- Dont delete related data
   FOREIGN KEY (owner_id) REFERENCES users(id)

);

-- @block
INSERT INTO rooms (owner_id, street) 
VALUES 
(1, 'tokoroa tiny house'),
(1, 'hamilton house boat'),
(1, 'blenheim bach'),
(1, 'auckland apartment');

-- @block
-- JOIN -query users who own rooms
-- inner, left, right, outer - reading data from 2 tables
SELECT 
users.id AS user_id,
rooms.id AS room_id,
email,
street
 FROM users
INNER JOIN rooms

-- select all users - users with no rooms NULL fields
-- LEFT JOIN rooms
ON rooms.owner_id = users.id;

-- @block
CREATE TABLE bookings (
   id INT AUTO_INCREMENT,
   guest_id INT NOT NULL,
   room_id INT NOT NULL,
   check_in DATETIME,
   PRIMARY KEY (id),
   -- User has booked many rooms
   FOREIGN KEY (guest_id) REFERENCES users(id),
   FOREIGN KEY (room_id) REFERENCES rooms(id)
);

-- @block 
SELECT
   guest_id,
   street,
   check_in
FROM bookings
INNER JOIN rooms ON rooms.owner_id = guest_id
WHERE guest_id = 1;


-- Delete table
-- DROP TABLE table 

-- Delete DATABASE
-- DROP DATABASE database
