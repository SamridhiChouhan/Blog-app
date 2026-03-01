import PostCard from "./PostCard";

function PostSection(props) {
  const allPost = props.allPost;
  return (
    <>
      <section className="post-section flex flex-wrap justify-center px-20 mt-8">
        {allPost.map((post, idx) => {
          return <PostCard key={idx} postData={post} />;
        })}
      </section>
    </>
  );
}

export default PostSection;
