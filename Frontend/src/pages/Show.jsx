import { Link } from "react-router";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

function Show(props) {
  console.log(props);
  // const { id } = useParams();
  // const [filteredPost, setFilteredPost] = useState(null);

  // let showUrl = `http://localhost:2020/show/${id}`;

  // useEffect(() => {
  //   let showData = fetch(showUrl)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setFilteredPost(data[0]);
  //     });
  // }, []);
  // console.log(filteredPost);

  if (!props.filteredPost) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      Post Title : {props.filteredPost.title}
      <br />
      <button>
        <Link to="/edit">Edit</Link>
      </button>
    </>
  );
}

export default Show;
