import Create from "./Components/Create";
import MyNotes from "./Components/MyNotes";
import NavBar from "./Components/NavBar";
import React, { useState, useEffect, useRef, createContext } from "react";

const myNotes = createContext();
const contextURL = createContext();

function App() {
  const [data, setData] = useState([]);
  const dataFetchedRef = useRef(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const url = "http://localhost:8000/notes/";

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetch(url, { method: "GET" })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
          // console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.log(error);
        }
      );
  }, []);

  return (
    <div className="App">
      <NavBar />
      <myNotes.Provider value={data}>
        <contextURL.Provider value={url}>
          <Create />
          <MyNotes />
        </contextURL.Provider>
      </myNotes.Provider>
    </div>
  );
}

export default App;
export { myNotes, contextURL };
