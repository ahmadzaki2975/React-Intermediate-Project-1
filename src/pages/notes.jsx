import { AddNoteBtn } from "../components/AddNoteBtn";
import { NotesList } from "../components/NotesList";

export const Notes = (props) => {
  return(
    <>
      <h1 className="text-2xl font-semibold text-center pt-10">Notes</h1>
      <NotesList notesList={props.notesList} />
      <AddNoteBtn />
    </>
  )
}