import React, { useEffect, useState } from "react";
import Main from "../main/Main";
import "./note.css";
import { useNotes } from "../../context/NoteContext";

const AddNote = () => {
  // таким образом тягиваем функцию которую писали
  // const {функции или данные от контекста которые мы отправляли в values} = приходит из контекста 
  // это у нас useNotes() 
  const { addNote } = useNotes();

  // открываем useState чтобы хранить данные с инпутов в виде строки
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  // функция для кнопки после которого данные с инпута виде обьекта (которую создали внутри функции)
  // будет равным заметки в котором заголовок, текст и айди 
  function handleSubmit() {
    const newNote = {
      title: title,
      text: text,
      id:Date.now()
    };
    // используем функцию который писали в контексте, у него был параметр newNote
    // параметр будет равно к нашему только что создавшему обьекту
    addNote(newNote);
    // и так же после нажатии кнопки инпуты будут обновлятся
    // надо дать значения value={} инпутам !!
    setTitle("");
    setText("");
  }

  return (
    <>
      <Main />
      <div id="add-note">
        <div className="container">
          <div className="add-note">
            <h2>Добавить заметки</h2>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Заголовок"
              value={title}
            />
            <input
              onChange={(e) => setText(e.target.value)}
              type="text"
              placeholder="Введите текст"
              value={text}
            />
            <button onClick={handleSubmit}>Создать заметку</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNote;
