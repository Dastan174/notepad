import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/main/Main";
import NoteList from "./components/note/NoteList";
import AddNote from "./components/note/AddNote";
import EditNote from "./components/note/EditNote";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/add-note" element={<AddNote />} />
          <Route path="/note-list" element={<NoteList />} />
          <Route path="/edit/:id" element={<EditNote/>}/>
        </Routes>
      </div>
  );
}

export default App;
