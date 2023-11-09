import React from 'react'
import { useState, useEffect } from "react";
import ActionProvider from "../chatbot/ActionProvider";
import MessageParser from "../chatbot/MessageParser";
import config from "../chatbot/config";
import "../App.css";
import Chatbot from 'react-chatbot-kit';

const Chat = () => {
  return (
    <div className='chatbot-container'>
      <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
    </div>
  )
};

export default Chat;
