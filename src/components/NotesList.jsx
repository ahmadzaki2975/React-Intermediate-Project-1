import { Note } from "./Note";

export const NotesList = (props) => {
  const notes = props.notesList.filter((note) => note.archived == false);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-10 px-10">
      {notes.length > 0 ? (
        notes.map((note) => {
          return (
            <Note
              title={note.title}
              body={note.body}
              key={note.id}
              id={note.id}
              createdAt={note.createdAt}
            />
          );
        })
      ) : (
        <div className="col-span-3 h-[50vh] flex flex-col items-center justify-center py-5 ">
          <h1 className="text-2xl text-center">Notes is empty</h1>
        </div>
      )}
      {/* <div className="text-3xl border-dashed border-2 border-white flex justify-center items-center rounded cursor-pointer">
        +
      </div> */}
    </div>
  );
};
