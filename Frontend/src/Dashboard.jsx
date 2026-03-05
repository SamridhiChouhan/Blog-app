// import Header from "./includes/Header";
import HeroSection from "./main/HeroSection";
import PostSection from "./main/PostSection";

function Dashboard(props) {
  const allPost = props.allPost;
  const filtering = props.filtering;
  return (
    <>
      <div className="Dashboard flex flex-col w-full items-center ">
        {/* <Header /> */}
        <HeroSection />
        <PostSection allPost={allPost} filtering={filtering} />
      </div>
    </>
  );
}

export default Dashboard;
