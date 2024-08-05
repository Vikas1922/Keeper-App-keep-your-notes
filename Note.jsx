import React, { useState } from "react";

export default function Note(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,

        title: value,
      };
    });
  }

  function handleChange2(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,

        content: value,
      };
    });
  }

  function addNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  return (
    <div className="note_sec">
      <form className="form">
        <div className="title">
          <input
            type="text"
            name="mytitle"
            placeholder="Title..."
            value={note.title}
            onChange={handleChange}
          />
        </div>
        <div className="message">
          <textarea
            rows={5}
            cols={30}
            placeholder="Enter message here...."
            value={note.content}
            onChange={handleChange2}
          />
        </div>
        <div className="btn">
          <button id="btn" onClick={addNote}>
            +
          </button>
        </div>
      </form>
    </div>
  );
}
