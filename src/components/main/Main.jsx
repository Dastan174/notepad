import React from "react";
import "./main.css";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div id="main">
      <div className="container">
        <div className="main">
          <div className="logo">
            <h1 onClick={() => navigate('/')}>NotePad</h1>
          </div>
          <div className="navbar">
            <p onClick={() => navigate("/note-list")}>Заметки</p>
            <p onClick={() => navigate("/add-note")}>Добавить заметку</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
