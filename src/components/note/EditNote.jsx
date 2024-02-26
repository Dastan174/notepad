import React, { useEffect, useState } from "react";
import Main from "../main/Main";
import "./note.css";

const AddNote = () => {

  return (
    <>
      <Main />
      <div id="edit-note">
        <div className="container">
          <div className="edit-note">
            <h2>Изменить заметки</h2>
            <input
              type="text"
              placeholder="Заголовок"
            />
            <input
              type="text"
              placeholder="Текст"
            />
            <button>Изменить заметку</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNote;
