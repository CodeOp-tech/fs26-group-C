import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Pusher from "pusher-js";
import axios from "axios";



const PUSHER_KEY = import.meta.env.VITE_PUSHER_KEY;

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const { sender, receiver } = useParams();

  useEffect(() => {
    setMessages([]);

    Pusher.logToConsole = true;

    var pusher = new Pusher(PUSHER_KEY, {
      cluster: 'eu'
    });

  const users = [sender, receiver].sort();
  const name = `chat-${users[0]}-${users[1]}`;

    var channel = pusher.subscribe(name);
    channel.bind("message", function(data) {
      console.log(data);
      setMessages((state) => [...state, data]);
    });

    return () => {
      pusher.unsubscribe(name);
    };

  }, [receiver, sender]);

  const sendMessage = async (e) => {
    e.preventDefault();
    try {

    
    await axios.post(`/api/messages/${sender}/${receiver}`, {
      data: { message: input},
    });
    setInput("");
  } catch(err) {
    console.log(err);
  }
  };

  const getMessages = async () => {};

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="d-flex flex-column h-100">
      <div className="flex-grow-1 p-3">
       {messages.map((message, index) => (
        <div
          key={index}
          className={
            message.senderId == sender ? "text-end my-2" : "text-start my-2"
          }
        >
          <div className="">
            <span
              className={`px-2 py-1 rounded text-white ${
                message.senderId == sender ? "bg-primary" : "bg-secondary"
              }`}
            >
              {message.content}
            </span>
          </div>
        </div>
      ))}
      </div>
      

      <div className="bg-light p-4 border-top">
        <form onSubmit={sendMessage}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={input}
              onChange={handleInputChange}
            />

            <button className="btn btn-outline-primary">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}
