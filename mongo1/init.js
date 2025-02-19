const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => console.log("Connection Successful..."))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "neha",
    to: "preeti",
    msg: "send me your exam sheet",
    createdAt: new Date(),
  },
  {
    from: "rohit",
    to: "mohit",
    msg: "teach me JS callbacks",
    createdAt: new Date(),
  },
  {
    from: "amit",
    to: "sumit",
    msg: "all the best!",
    createdAt: new Date(),
  },
  {
    from: "anita",
    to: "ramesh",
    msg: "bring me some fruits",
    createdAt: new Date(),
  },
  {
    from: "tonny",
    to: "peter",
    msg: "love you 3000",
    createdAt: new Date(),
  },
];

Chat.insertMany(allChats);
