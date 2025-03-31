// import http module
const http = require("http");

const userList = [
   { name: "andy", age: 21 },
   { name: "randy", age: 27 },
   { name: "sandy", age: 36 },
];

// createServer
// can write as
/* http.createServer(function(req,res)) {} */
const server = http.createServer((req, res) => {
   console.log("request received");
   console.log("requested URL: ", req.url);
   if (req.url === "/") {
      res.write("<h1>Response write</h1>");
      res.end("bye");
   }
   if (req.url === "/favicon.ico") {
      res.writeHead(204, { "Content-Type": " image/x-icon" });
      res.end();
   }
   if (req.url === "/api/greet") {
      res.write(
         "<div><h1>Hello, thank you for visiting api/greet</h1><p>Looks like its more html</p></div>"
      );
      res.end("end of greet");
   }
   if (req.url === "/api/userlist") {
      // Cannot send js objects or arrays. Only string in json format
      res.write(JSON.stringify(userList));
      res.end();
   }
});

/* takes callback function- 2 params (request, response)
represent incoming request and outgoing response

Function called for each incoming request. Can define how server should handle requests
*/
const PORT = 3000;
server.listen(PORT, () => {
   console.log(`Listening on port ${PORT}`);
});
