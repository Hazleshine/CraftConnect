// src/components/Chatbot.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Chatbot.css";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const endpoint = "/api/chatbot/chat";
    const response = await fetch(`${process.env.REACT_APP_API_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    const data = await response.json();

    setConversation([...conversation, { user: message, bot: data.reply }]);
    setMessage("");
  };

  return (
    <div className="chatbot-container shadow-lg rounded-lg bg-white p-4">

      <div className="chatbot-header text-center text-white py-2"><h1>CraftTalkAI</h1></div>

      <div className="chatbot-messages p-3">
        {conversation.map((msg, index) => (
          <div key={index}>
            <div className="user-message p-2 my-2 rounded-lg shadow-sm">{msg.user}</div>
            <div className="bot-message p-2 my-2 rounded-lg shadow-sm">{msg.bot}</div>
          </div>
        ))}
      </div>
      <div className="chatbot-input d-flex align-items-center">
        <input
          type="text"
          className="form-control"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button className="btn btn-primary ms-2" onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
