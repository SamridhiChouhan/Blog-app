import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [allPost, setallPost] = useState([]);
  useEffect(() => {
    let url = "http://localhost:2020";
    let result = fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setallPost(data);
      });
    console.log(result);
  }, []);

  console.log(allPost);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
