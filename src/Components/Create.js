import React, { useContext, useState } from "react";
import { contextURL } from "../App";
import "./Create.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const url = useContext(contextURL);

  const getTitleAndNotes = (e) => {
    setNotes(e.target.value);
    setTitle(getTitle(e.target.value));
  };

  // get title from paragraph and set it to title
  const getTitle = (str) => {
    const title = str.split(" ").slice(0, 5).join(" ");
    return title;
  };

  const createHandler = () => {
    if (title && notes) {
      setTitle(getTitle(notes));
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, userNote: notes }),
      }).then(() => {
        console.log("New note created");
      });
      setNotes("");
    }
    window.location.reload();
  };

  const resetHandler = () => {
    setNotes("");
    console.log("Reset");
  };

  return (
    <main className="container">
      <textarea
        name=""
        id="notes-msg"
        rows="5"
        value={notes}
        placeholder="Take a note..."
        onChange={(e) => getTitleAndNotes(e)}
      ></textarea>
      <div className="buttons">
        <button className="btn btn-success" onClick={createHandler}>
          Create
        </button>
        <button className="btn btn-secondary" onClick={resetHandler}>
          Reset
        </button>
      </div>
    </main>
  );
};

export default Create;
