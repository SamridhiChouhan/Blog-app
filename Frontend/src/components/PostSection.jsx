import PostCard from "./PostCard";

function PostSection(props) {
  const allPost = props.allPost;
  const filtering = props.filtering;
  return (
    <>
      <section className="post-section flex flex-wrap justify-center px-20 mt-8">
        {allPost.map((post, idx) => {
          return <PostCard key={idx} postData={post} filtering={filtering} />;
        })}
      </section>
    </>
  );
}

export default PostSection;
