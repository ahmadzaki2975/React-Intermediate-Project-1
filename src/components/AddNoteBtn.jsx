import { Link } from "react-router-dom";
import {AiOutlinePlus} from "react-icons/ai";

export const AddNoteBtn = () => {
  return (
    <>
      <Link to="/add-note">
        <button className="fixed bottom-0 right-0 m-5 md:m-16 bg-blue-primary text-white w-12 text-2xl flex justify-center items-center aspect-square rounded-full drop-shadow-[0_0_10px_#0096FF] shadow-blue-primary hover:bg-blue-600">
          <AiOutlinePlus />
        </button>
      </Link>
    </>
  );
}