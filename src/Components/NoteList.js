import React, { useContext } from "react";
import "./NoteList.css";
import { myNotes, contextURL } from "../App";

const NoteList = () => {
  const data = useContext(myNotes);
  const url = useContext(contextURL);

  const handleEdit = (id, editData) => {
    const newNote = prompt("Enter updated note: ", editData);
    if (newNote === null) {
      console.log("Edit cancelled");
      return;
    }
    const newTitle = newNote.split(" ").slice(0, 5).join(" ");
    fetch(url + id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle, userNote: newNote }),
    }).then(() => {
      console.log("Note updated");
    });
    window.location.reload();
  };

  const handleDelete = (id) => {
    fetch(url + id, {
      method: "DELETE",
    }).then(() => {
      console.log("Note deleted");
      window.location.reload();
    });
  };
  return (
    <>
      {data &&
        data.map((note) => (
          <div className="note" key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.userNote}</p>
            <button
              className="btn btn-primary"
              onClick={() => handleEdit(note.id, note.userNote)}
            >
              Edit Note
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(note.id)}
            >
              Delete
            </button>
            <hr />
          </div>
        ))}

      {data && data.length === 0 && <h3>No notes found...</h3>}
    </>
  );
};

export default NoteList;
