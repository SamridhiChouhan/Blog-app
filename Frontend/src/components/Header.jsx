import { Link } from "react-router";

function Header() {
  return (
    <>
      <header className="w-full flex items-center justify-between p-6 px-32">
        <a className="font-bold text-xl">Blog App</a>
        <div className="nav-links w-1/3 bg-gray-300 h-full rounded-full flex justify-between">
          <Link to="/" className="bg-black rounded-full text-white px-6 py-2">
            Blog
          </Link>
          <Link to="/" className=" px-6 py-2 ">
            Explore
          </Link>
          <Link to="/add" className=" px-6 py-2 ">
            Create
          </Link>
          <Link to="/" className=" px-6 py-2 ">
            Profile
          </Link>
        </div>
        <Link
          to="/"
          className="bg-lime-200 text-black px-5 py-2 rounded-full font-semibold"
        >
          Sign up
        </Link>
      </header>
    </>
  );
}

export default Header;
