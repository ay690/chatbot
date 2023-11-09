import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "../App.css"

const EnterInfo = () => {
  const navigate = useNavigate();

  const showBot = () => {
    navigate("/chat")
  }

  return (
    <div className='info' >
     <h3>Enter Student Info</h3>
     <button className='enroll_button' onClick={() => showBot()} >Enroll Now</button>
    </div>
  )
}

export default EnterInfo
