import { AddNoteBtn } from "../components/AddNoteBtn";
import { NotesList } from "../components/NotesList";
import PropTypes from "prop-types";

export const Notes = (props) => {

  NotesList.propTypes = {
    notesList: PropTypes.array,
  }

  return(
    <>
      <h1 className="text-2xl font-semibold text-center pt-10">Notes</h1>
      <NotesList notesList={props.notesList} />
      <AddNoteBtn />
    </>
  )
}

Notes.propTypes = {
    notesList: PropTypes.array,
  };