import { Link } from "react-router-dom";
import { FaStickyNote } from "react-icons/fa";
import { BsArchiveFill } from "react-icons/bs";

export const Home = () => {
  return (
    <>
      <main>
        <h1 className="text-3xl text-center pt-10">Welcome!</h1>
        <div className="grid grid-cols-1 px-20 mt-10 gap-10 2sm:grid-cols-2 md:px-[30%]">
          <Link to="/notes">
            <div className="flex flex-col items-center justify-center hover:outline aspect-square rounded">
              <FaStickyNote className="text-6xl text-center mt-10" />
              <h1 className="text-2xl">Notes</h1>
            </div>
          </Link>
          <Link to="/archived">
            <div className="flex flex-col items-center justify-center hover:outline aspect-square rounded">
              <BsArchiveFill className="text-6xl text-center mt-10" />
              <h1 className="text-2xl">Archived</h1>
            </div>
          </Link>
        </div>
      </main>
      <footer className="w-full 2sm:mt-40">
        <div className="flex justify-center items-center mt-10">
          <p className="text-center text-lg">
            Made by &ensp;
            <a href="https://github.com/ahmadzaki2975" className="hover:underline underline-blue-primary">
            <span className="text-blue-primary font-semibold ">Ahmad Zaki Akmal</span>
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};
