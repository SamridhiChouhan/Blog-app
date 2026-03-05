import HeroSection from "../components/HeroSection";
import PostSection from "../components/PostSection";

function Dashboard(props) {
  const allPost = props.allPost;
  const filtering = props.filtering;
  return (
    <>
      <div className="Dashboard flex flex-col w-full items-center ">
        <HeroSection />
        <PostSection allPost={allPost} filtering={filtering} />
      </div>
    </>
  );
}

export default Dashboard;
