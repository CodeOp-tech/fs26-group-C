const express = require("express");
const router = express.Router();
require("dotenv").config();
const Pusher = require("pusher");
const models = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const channels_client = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: "eu",
  useTLS: true,
});

router.post("/:sender_id/:receiver_id", (req, res) => {
  let { senderId, receiverId } = req.params;
  let content = req.body.data.message;

  const users = [senderId, receiverId].sort();
  const name = `chat-${users[0]}-${users[1]}`;



  channels_client.trigger(name, "message", {
    senderId, receiverId, content,
  });

  res.send({ msg: "Sent" });
});

module.exports = router;