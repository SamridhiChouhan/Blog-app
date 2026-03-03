import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import Dashboard from "./Dashboard";
import Header from "./includes/Header";
import Show from "./routes/Show";
import AddForm from "./routes/AddForm";
import EditForm from "./routes/EditForm";

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
    // console.log(result);
  }, []);

  // console.log(allPost);

  return (
    <>
      <Header />
      {/* <Dashboard allPost={allPost} /> */}
      <Routes>
        <Route index element={<Dashboard allPost={allPost} />} />
        <Route path="add" element={<AddForm />} />
        <Route path="show" element={<Show />} />
        <Route path="edit" element={<EditForm />} />
      </Routes>
    </>
  );
}

export default App;
