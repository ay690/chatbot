import React from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import Exit from "./components/Exit";
import DataDisplay from "./components/DataDisplay";
import Chat from "./components/Chat";
import EnterInfo from "./components/EnterInfo";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/chat" element={<Chat />} />
        <Route exact path="/exit" element={<Exit />} />
        <Route exact path="/" element={<EnterInfo />} />
        <Route exact path="/data" element={<DataDisplay />} />
      </Routes>
    </>
  );
}

export default App;
