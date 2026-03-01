import Header from "./includes/Header";
import HeroSection from "./main/HeroSection";
import PostSection from "./main/PostSection";

function Dashboard(props) {
  // console.log(props.allPost);
  const allPost = props.allPost;
  return (
    <>
      <div className="Dashboard flex flex-col w-full items-center ">
        <Header />
        <HeroSection />
        <PostSection allPost={allPost} />
      </div>
    </>
  );
}

export default Dashboard;
