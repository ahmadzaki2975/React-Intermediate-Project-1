import { Note } from "../components/Note";
import { useState, useEffect } from "react";

export const Archived = (props) => {
  const archivedNotes = props.notesList.filter((note) => note.archived == true);

  if (archivedNotes.length > 0) {
    return (
      <>
        <h1 className="text-2xl font-semibold text-center pt-10">Archive</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-10 px-10">
          {archivedNotes.map((note) => {
            return (
              <Note
                title={note.title}
                body={note.body}
                key={note.id}
                id={note.id}
                createdAt={note.createdAt}
              />
            );
          })}
        </div>
      </>
    );
  } else {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-20 px-10">
        <div className="col-span-3 h-[50vh] flex flex-col items-center justify-center py-5 ">
          <h1 className="text-2xl text-center">Archive is empty</h1>
        </div>
      </div>
    );
  }
};
