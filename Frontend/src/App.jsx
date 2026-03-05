import { useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router";

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
  // const [filteredPost, setFilteredPost] = useState("");
  // let { id } = useParams();

  useEffect(() => {
    // let { id } = useParams();
    let mainUrl = "http://localhost:2020";
    // let showUrl = `http://localhost:2020/show/${id}`;
    let mainData = fetch(mainUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setallPost(data);
      });
    // let showData = fetch(showUrl)
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     setFilteredPost(data);
    //   });

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
        <Route path="show/:id" element={<Show allPost={allPost} />} />
        <Route path="edit" element={<EditForm />} />
      </Routes>
    </>
  );
}

export default App;
