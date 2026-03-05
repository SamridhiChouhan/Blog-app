import { useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Show from "./pages/Show";
import AddForm from "./pages/AddForm";
import EditForm from "./pages/EditForm";

function App() {
  const [allPost, setallPost] = useState([]);
  const { id } = useParams();
  const [filteredPost, setFilteredPost] = useState(null);

  let showUrl = `http://localhost:2020/show/${id}`;

  useEffect(() => {
    let mainUrl = "http://localhost:2020";
    let mainData = fetch(mainUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setallPost(data);
      });

    let showData = fetch(showUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFilteredPost(data);
      });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Dashboard allPost={allPost} />} />
        <Route path="add" element={<AddForm />} />
        <Route path="show/:id" element={<Show filteredPost={filteredPost} />} />
        <Route path="edit" element={<EditForm />} />
      </Routes>
    </>
  );
}

export default App;
