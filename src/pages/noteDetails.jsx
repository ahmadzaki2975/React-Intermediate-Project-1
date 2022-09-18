import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { showFormattedDate } from "../utils/dateFormat";
import  {AiOutlineRollback}  from "react-icons/ai";
import {RiInboxArchiveFill, RiInboxUnarchiveFill} from "react-icons/ri";
import {FaTrashAlt} from "react-icons/fa";

export const NoteDetails = (props) => {
  const { noteId } = useParams();
  const notesList = props.notesList;
  const navigate = useNavigate();
  const [note, setNote] = useState({
    title: "",
    body: "",
    createdAt: "",
  });

  useEffect(() => {
    // console.log(noteId);
    // console.log(notesList);
    const note = notesList.find((note) => note.id == noteId);
    // console.log(note);
    if (note) {
      setNote(note);
    }
  }, [noteId, notesList]);

  if (note.title !== "") {
    return (
      <div className="px-2 2sm:px-10 py-5">
        {/* <h1 className="text-3xl">{noteId}</h1> */}
        <h1 className="text-3xl font-bold">{note.title}</h1>
        <p className="opacity-80 text-lg mt-1s">
          {showFormattedDate(note.createdAt)}
        </p>
        <div className="w-full h-[2px] bg-white my-4"></div>
        <p className="max-w-[80%] text-xl font-light md:max-w-[50ch]">
          {note.body}
        </p>
        <div className="flex gap-2 mt-10">
          <div
            className="bg-red-500 px-5 py-2 rounded cursor-pointer flex gap-2 items-center"
            onClick={() => {
              props.deleteNote(noteId);
              navigate("/notes");
            }}
          >
            <FaTrashAlt/> Delete
          </div>
          {
            note.archived
            ? (
            <div
            className="bg-blue-500 px-5 py-2 rounded cursor-pointer flex gap-2 items-center"
            onClick={() => {
              props.toggleArchive(noteId);
              navigate("/archived");
            }}
          >
            <RiInboxUnarchiveFill/> Unarchive
          </div>
            ) : (
              <div
              className="bg-blue-500 px-5 py-2 rounded cursor-pointer flex gap-2 items-center"
              onClick={() => {
                props.toggleArchive(noteId);
                navigate("/archived");
              }}
            >
              <RiInboxArchiveFill /> Archive
            </div>)
          }
          <div
            className="bg-slate-500 px-5 py-2 rounded cursor-pointer flex gap-2 items-center"
            onClick={() => {
              navigate(-1);
            }}
          >
            <AiOutlineRollback /> Back
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-[50vh] flex flex-col items-center justify-center">
        <h1 className="text-2xl">No note found</h1>
      </div>
    );
  }
};
