import React from "react";
import { useNotes } from "../../context/NoteContext";
import NoteItem from "./NoteItem";
import Main from "../main/Main";

const NoteList = () => {
  const { note } = useNotes();
  return (
    <div>
      <Main />
      <h1
        style={{
          textAlign: "center",
          fontFamily: "sans-serif",
          paddingTop: "20px",
        }}
      >
        Заметки
      </h1>
      {note.map((el) => (
        <NoteItem el={el} />
      ))}
      {/* через props el отправляем наш обьект, у обьекта есть ключи: заголовок,текст,айди */}
    </div>
  );
};

export default NoteList;
