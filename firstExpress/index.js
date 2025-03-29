const express = require("express");

// Goal - get server running
const app = express();
// console.dir(app);

// Callback function for requrests
// app.use((request, response) => {
//    console.log("Booyahkasha");
//    // Large object
//    // console.dir(request);
//    response.send("Hello, Request received");
//    response.send({ color: "red" });
//    response.send(`<h1>THIS IS A RESPONSE</h1>`);
// });

app.get("/", (req, res) => {
   res.send("HOME PAGE");
});
app.get("/r/:subreddit/:postId", (req, res) => {
   const { subreddit, postId } = req.params;
   res.send(
      `<div><h1>Now browsing the ${subreddit} subreddit</h1><p>Viewing post ID: ${postId}</p></div>`
   );
});
app.get("/cats", (req, res) => {
   res.send("CAT REQUEST");
});
app.post("/cats", (req, res) => {
   res.send("This is a post request to /cats");
});
app.get("/dogs", (req, res) => {
   res.send("WOOF WOOF");
});
app.get("/search", (req, res) => {
   const { q } = req.query;
   // console.log(req.query);
   // /search?q={query}
   res.send(`<h1>Search results for ${q}</h1>`);
});

// Matches everything else. Place at the end
app.get("*", (req, res) => {
   res.send("Everything else");
});

app.listen(3000, () => {
   console.log("Snooping on port 3000");
});
