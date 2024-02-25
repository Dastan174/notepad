import React, { createContext, useContext, useState } from "react";


// это якобы конструкция контекста 
const noteContext = createContext();
export const useNotes = () => useContext(noteContext);

const NoteContext = ({ children }) => {
  // создаем массив useState чтобы тянуть данные с инпута,
  // нам нужен массив потому что мы используем потому что используем map()
  // и может поместить в бесконечном числе данные
  const [note, setNote] = useState([]);

  // функция для добавлении заметки

  function addNote(newNote) {
    setNote([...note, newNote]);
  }

  // функция для удаления заметки
  // параметр id нужен для удаления ту самую заметку

  function deleteNote(id) {
    const deletedNote = note.filter((el) => el.id !== id);
    setNote(deletedNote);
  }

  // values это доставщик для всем комнонентам, внутри него написаны
  // функции или данные которую мы будем использовать в другом компоненте
  const values = {
    addNote,
    note,
    deleteNote,
  };
  return <noteContext.Provider value={values}>{children}</noteContext.Provider>;
};

export default NoteContext;

// контекст нужен чтобы все функции писать в одном компоненте
// тоесть писать логику сайта, и отправлять во все компоненты и использовать там где хотим,
// ну и кода будет меньше и чище
// надо оборочивать в index.js нашу App.js с нашим контекстом это у нас тут NoteContext