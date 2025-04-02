const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const users = [
   { email: "bob@hello.com", password: "bob123" },
   { email: "anna@hello.com", password: "anna123" },
];

app.post("/login-with-fetch", (req, res) => {
   console.log("/login-with-fetch endpoint hit");
   console.log(req.body);
   console.log(req.body.email);

   // loop over array/ database and check for matches with data from from end
   for (let i = 0; i < users.length; i++) {
      if (
         users[i].email === req.body.email &&
         users[i].password === req.body.password
      )
         return res.sendStatus(200);
   }
   res.sendStatus(401);
});

// Compare email and password provided by client against entries of emails and corresponding passwords in mock database. Using a for loop.
// If match - return 200 status code. no match - 401 status code Unauthorized

// Error handling
app.listen(process.env.PORT, function () {
   console.log(`Server listening on port ${process.env.PORT}`);
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
