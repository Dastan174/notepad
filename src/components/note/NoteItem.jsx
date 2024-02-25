import React from "react";
import { useNotes } from "../../context/NoteContext";



// принимаем наш props {el}
const NoteItem = ({ el }) => {
  // принимаем нашу функцию для удаления
  const { deleteNote } = useNotes();
  console.log(el);
  return (
    <div id="note-item">
      <div className="container">
        <div className="note-item">
          <div className="note-title">
            <h1>{el.title}</h1>
            <p>{el.text}</p>
          </div>
          <div className="note-btns">
            {/* удаляем по айди, айди дает удалить именно ту которую мы хотим */}
            <button onClick={() => deleteNote(el.id)}>Delete Note</button>
            <button>Edit Note</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
