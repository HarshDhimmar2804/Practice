const express = require("express");

const app = express();

let port = 3000;

// app.use((req, res) => {
//   // console.log(req);
//   console.log("request received");
//   res.send("This is a basic response");
// });

app.get("/", (req, res) => {
  res.send("you contacted root path");
});

app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  res.send(`Welcome to the page of @${username}.`);
});

app.get("/search", (req, res) => {
  let {q} = req.query;
  if(!q){
    res.send(`<h1>Nothing Searched</h1>`)
  }
  res.send(`<h1>search results for query: ${q}</h1>`);
});

// app.get("/apple", (req, res) => {
//   res.send("you contacted apple path");
// });

// app.get("/orange", (req, res) => {
//   res.send("you contacted orange path");
// });

// app.get("*", (req, res) => {
//   res.send("This path does not exist");
// });

// app.post("/", (req, res) => {
//   res.send("Yoy send a post request to root");
// });

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
