import React from "react";
import "./MyNotes.css";
import NoteList from "./NoteList";

const MyNotes = () => {
  return (
    <div className="my-notes container">
      <h2>My Notes</h2>
      <hr />
      <div className="notes">
        <NoteList />
      </div>
    </div>
  );
};

export default MyNotes;
