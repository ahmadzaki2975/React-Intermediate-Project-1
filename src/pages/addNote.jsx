import { useState } from "react";
import PropType from "prop-types";
import { useNavigate } from "react-router-dom";

export const AddNote = (props) => {
  const [note, setNote] = useState({});
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  note.PropType = {
    id: PropType.string,
    title: PropType.string,
    body: PropType.string,
    archived: PropType.bool,
    createdAt: PropType.string,
  };

  const handleSubmit = (e) => {
    const newNote = {
      id: Date.now().toString(),
      title: title,
      body: body,
      archived: false,
      createdAt: Date.now(),
    };
    if (title.length <= 0 || body.length <= 0) {
      alert("Please fill all the fields");
    } else {
      setNote(newNote);
      props.addNote(newNote);
      setTitle("");
      setBody("");
      navigate("/notes");
    }
  }

  return(
    <>
      <h1 className="text-2xl font-semibold text-center pt-10">Add A New Note</h1>
      <form className="flex flex-col items-center justify-center pt-10 text-black">
        <input type="text" placeholder="Title" className="w-80 h-10 rounded-md border-2 border-gray-300 focus:outline-none focus:border-[#00B87C] px-2"
        value={title} onChange={(e) => {setTitle(e.target.value)}} />
        <textarea placeholder="Body" className="w-80 h-40 rounded-md border-2 border-gray-300 focus:outline-none focus:border-[#00B87C] px-2 mt-5" 
        value={body} onChange={(e) => {setBody(e.target.value)}} />
        <div className="bg-[#00B87C] hover:bg-[#1b7859] cursor-pointer text-white w-80 h-10 rounded-md mt-5 flex items-center justify-center" onClick={() => {handleSubmit()}}>Add Note</div>
      </form>
    </>
  )
}