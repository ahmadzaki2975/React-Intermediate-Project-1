import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsArchiveFill } from "react-icons/bs";
import { FaStickyNote, FaSearch } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="w-full bg-[#0096FF] text-white px-5 py-5 min-h-2 shadow-white items-center shadow-sm flex justify-between">
      <Link to="/">
        <h1 className="text-2xl">
          Notes App<span className="text-3xl text-purple-accent">.</span>
        </h1>
      </Link>
      <div className="flex gap-3">
        <Link to="/">
          <AiFillHome className="text-xl" title="Home"/>
        </Link>
        <Link to="/notes">
          <FaStickyNote className="text-xl" title="Home"/>
        </Link>
        <Link to="/archived" title="Archived Notes">
          <BsArchiveFill className="text-xl" />
        </Link>
        <Link to="/search" title="Archived Notes">
          <FaSearch className="text-xl" />
        </Link>
      </div>
    </div>
  );
};
