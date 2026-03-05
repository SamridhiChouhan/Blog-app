import { Link } from "react-router";

function PostCard(props) {
  // console.log(props.postData);
  const post = props.postData;
  const filtering = props.filtering;

  return (
    <>
      <Link to={`show/${post._id}`}>
        <div className="post-card h-96 w-80 bg-gray-300 m-4 p-2 shrink-0 rounded-xl">
          <div className="card-img bg-gray-500 h-60 w-full rounded-xl"></div>
          <div className="card-text p-2">
            <h3 className="font-semibold text-xl">{post.title}</h3>
            <p className="text-sm m-0"> {post.description}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default PostCard;
