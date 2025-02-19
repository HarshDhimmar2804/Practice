const express = require("express");
const path = require("path");
const Chat = require("./models/chat.js");
const mongoose = require("mongoose");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

main()
  .then(() => console.log("Connection Successful..."))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("index.ejs", { chats });
});

app.get("/", (req, res) => {
  res.send("Root is working");
});

app.listen(8080, () => {
  console.log("Server is running on 8080...");
});
