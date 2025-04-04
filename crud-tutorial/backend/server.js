const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const app = express();

const db = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: process.env.PASSWORD,
   database: "test",
});

// If auth issue
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY `process.env.PASSWORD`

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
   res.json("This is the backend");
});

app.get("/books", (req, res) => {
   const search = "SELECT * FROM `books`";
   db.query(search, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
   });
});

app.post("/books", (req, res) => {
   const q =
      "INSERT INTO `books` (`title`,`description`,`cover`,`price`) VALUES (?)";
   const values = [
      // "title from backend",
      // "desc from backend",
      // "cover from backend", //hard coded
      req.body.title,
      req.body.description,
      req.body.cover,
      req.body.price,
   ];

   // INSERT INTO `test`.`books` (`id`, `title`, `description`, `cover`) VALUES ('2', 'second book', 'lorem ipsum', 'nocover.jpeg');
   db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.json("Book created");
   });
});

app.delete("/books/:id", (req, res) => {
   const bookId = req.params.id;

   const del = "DELETE FROM books WHERE id = ?";

   db.query(del, [bookId], (err, data) => {
      if (err) return res.json(err);
      return res.json("book deleted");
   });
});

app.put("/books/:id", (req, res) => {
   const bookId = req.params.id;

   const upd =
      "UPDATE books SET `title` = ?, `description` = ?,`cover` = ?,`price` = ? WHERE id = ?";

   const values = [
      req.body.title,
      req.body.description,
      req.body.cover,
      req.body.price,
   ];

   db.query(upd, [...values, bookId], (err, data) => {
      if (err) return res.json(err);
      return res.json("book updated");
   });
});

// SELECT all from table
// db.query("SELECT * FROM `books`", function (err, res, fields) {
//    console.log(res);
//    console.log(fields);
// });

app.listen(3456, () => {
   console.log(`Listening to port 3456`);
});
