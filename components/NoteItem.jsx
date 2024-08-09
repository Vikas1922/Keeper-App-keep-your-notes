import React from "react";

export default function NoteItem(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="note_sec1">
      <div className="title m-5">
        <h3>{props.title}</h3>
      </div>
      <div className="message m-5" style={{ wordWrap: "wrap" }}>
        <p>{props.content}</p>
      </div>
      <div className="btn1">
        <button id="btn" onClick={handleClick}>
          delete
        </button>
      </div>
    </div>
  );
}
