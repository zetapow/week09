// Set up app

const express = require("express");
const app = express();
const cors = require("cors");

// middleware
app.use(cors());

// content - html wrapped in a string, must stay on one line
// a paragraph element with some coloured text
const text = "<h2 style='color:red;background-color:white'>Text Content</h2>";

// an image element with a path to an image from the internet set to 60vw
const image = `<img src="owl1.jpg" alt="owl1" style="width: 60vw" />`;

// div container with 60vw and display flex
// -inside a paragraph element with some text
// -inside an image element with a path to an image in frontend public
const textAndImage = `<div style="display: flex">
         <h2
            style="
               background-color: yellow;
               color: black;
               align-content: center;
               width: 50vw;
            ">
            Baby Owl
         </h2>
         <img src="baby-owl.webp" alt="babyowl" style="width: 50vw" />`;

//routes
app.get("/text", (req, res) => {
   res.json({ content: text });
});

app.get("/image", (req, res) => {
   console.log("image end point hit");
   res.json({ content: image });
});

app.get("/text-and-image", (req, res) => {
   console.log("text and image end point hit");
   res.json({ content: textAndImage });
});

const PORT = 4000;
// setup server
app.listen(PORT, (err) => {
   if (err) {
      console.log(err);
   } else {
      console.log(`Server is listening at http://localhost:${PORT}`);
   }
});
