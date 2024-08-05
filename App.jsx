import { useState } from "react";
import Footer from "../components/footer/Footer";
import Heading from "../components/heading/Heading";
import Note from "../components/note/Note";
// import notes from "../components/note/userNotes";
import "./App.css";
import NoteItem from "../components/NoteItem";

function App() {
  const date = new Date();
  const year = date.getFullYear();

  const [notes, setNotes] = useState([]);

  function submitNote(newNote) {
    setNotes((prevNote) => {
      return [...prevNote, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNote) => {
      return prevNote.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <Heading />
      <Footer currYear={year} />
      <Note onAdd={submitNote} />
      <div className="note_sec_change">
        {notes.map((noteItem, index) => {
          return (
            <NoteItem
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
