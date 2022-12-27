import React, { useContext } from "react";
import "./NoteList.css";
import { myNotes, contextURL } from "../App";

const NoteList = () => {
  const data = useContext(myNotes);
  const url = useContext(contextURL);

  const handleEdit = () => {
    console.log("Edit");
  };

  const handleDelete = (id) => {
    fetch(url + id, {
      method: "DELETE",
    }).then(() => {
      console.log("Note deleted");
    });
  };
  return (
    <>
      {data &&
        data.map((note) => (
          <div className="note" key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.userNote}</p>
            <button className="btn btn-primary" onClick={handleEdit}>
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
