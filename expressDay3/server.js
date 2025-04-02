const express = require("express");
require("dotenv").config();

const app = express();

const userList = [
   { id: 1, name: "James", age: 55 },
   { id: 2, name: "Josiah", age: 44 },
   { id: 3, name: "Jane", age: 33 },
   { id: 4, name: "Joseph", age: 22 },
   { id: 5, name: "Janice", age: 11 },
   { id: 6, name: "Julius", age: 66 },
];

app.get("/", (req, res) => {
   res.send("Welcome to the homepage");
});

app.get("/api/about", (req, res) => {
   res.send(
      `<h1>About me</h1><p>I am a student learning full stack development</p> <img style='width:40%' src="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/2800/Gary-the-Snail.SpongeBob-SquarePants.webp"
         alt="Gary from Spongebob" />`
   );
});

app.get("/api/contact", (req, res) => {
   res.send(
      `<h3>Contact me at <a href="mailto:peterz@missionreadyhq.com">peterz@missionreadyhq.com</a></h3>`
   );
});

// /api/userlist and respond with JSON
app.get("/api/userlist", (req, res) => {
   res.json(userList);
});

// Dynamic route parameters = named URL used to capture values specified at their position in the URL. req.params object
// Defined with placeholders in route path :param
app.get("/api/userlist/:name", (req, res) => {
   console.log("req.params", req.params);
   console.log(req.params.name);
   // assign req.params.nam into constant
   const requestedName = req.params.name;
   const user = userList.find(
      (user) => user.name.toLowerCase() === requestedName.toLocaleLowerCase()
   );
   res.json(user);
});

// Refactor example
app.get("/api/profile", function (req, res) {
   console.log(req.query); // {name: 'Name', age: }
   console.log(req.query.age);
   // destructure req.query
   const { searchName, searchAge } = req.query;
   
   if (!searchName && !searchAge) {
      return res
         .status(404)
         .json({ status: "Error", message: "User not found" });
   }

   const profile = userList.filter(
      (user) =>
         (!searchName ||
            user.name.toLowerCase() === searchName.toLowerCase()) &&
         (!searchAge || parseInt(searchAge) === user.age)
   );

   console.log(profile);
   if (profile.length > 0) {
      res.status(200).json({ status: "OK", data: profile });
   } else {
      res.status(404).json({ status: "Error", message: "User not found" });
   }
});

// Error handling
app.listen(process.env.PORT, function () {
   console.log(
      `Server http://localhost:3000/ listening on port ${process.env.PORT}`
   );
}).on("Error", (error) => {
   console.error(error);
   if (error.code === "EADDRINUSE") {
      console.log(
         "Port is already in use, try a different port or close other servers"
      );
   } else {
      console.log("🤯", error);
   }
});

// app.get("/api/profile", function (req, res) {
//    console.log(req.query); // {name: 'Name', age: }
//    console.log(req.query.age);

//    const searchedAge = req.query.age;
//    const searchedName = req.query.name;

//    if (!searchedName && !searchedAge) {
//       return res
//          .status(404)
//          .json({ status: "Error", message: "User not found" });
//    }

//    const profile = userList.filter(
//       (user) =>
//          (!searchedName ||
//             user.name.toLowerCase() === searchedName.toLowerCase()) &&
//          (!searchedAge || parseInt(searchedAge) === user.age)
//    );

//    console.log(profile);
//    if (profile.length > 0) {
//       res.status(200).json({ status: "OK", data: profile });
//    } else {
//       res.status(404).json({ status: "Error", message: "User not found" });
//    }
// });
