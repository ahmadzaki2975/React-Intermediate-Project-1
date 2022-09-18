import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { notes } from "./utils/notes";
import { Home } from "./pages/home";
import { NoteDetails } from "./pages/noteDetails";
import { PageNotFound } from "./pages/notFound";
import { Notes } from "./pages/notes";
import { Archived } from "./pages/archived";
import PropTypes from "prop-types";
import { Search } from "./pages/search";
import { AddNote } from "./pages/addNote"

function App() {
  //? states and variables
  notes.PropTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    isArchived: PropTypes.bool,
  };

  const [notesList, setNotesList] = useState([]);
  useEffect(() => {
    setNotesList(notes);
  }, [])

  //? functions
  const addNote = (note) => {
    setNotesList([...notesList, note]);
  }

  const deleteNote = (id) => {
    const newNotesList = notesList.filter((note) => note.id != id);
    setNotesList(newNotesList);
  }

  const toggleArchive = (id) => {
    const noteToBeToggled = notesList.find((note) => note.id == id);
    noteToBeToggled.archived = !noteToBeToggled.archived;
    setNotesList([...notesList]);
  }

  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen bg-[#191919] text-white pb-10">
        <Routes>
          //? Home Route
          <Route path="/" element={<Home />} />

          //? Notes Route
          <Route path="/notes" element={
            <Notes notesList={notesList} />
          }/>

          //? Archived Route
          <Route path="/archived" element={
            <Archived notesList={notesList}/>
          }
          />

          //? Single Note Route
          <Route path="/notes/:noteId" element={
            <NoteDetails notesList={notesList} deleteNote={deleteNote} toggleArchive={toggleArchive}/>
          } />

          //? Search Page Route
          <Route path="/search" element={<Search notesList={notes} />} />

          //? Add Note Route
          <Route path="/add-note" element={<AddNote addNote={addNote} />} />

          //! Not Found Route
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
