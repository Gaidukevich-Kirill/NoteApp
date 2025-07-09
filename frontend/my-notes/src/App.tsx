import * as React from "react";
import './App.css';
import CreateNoteForm from "./components/CreateNoteForm";
import Note from "./components/Note";
import Filters from "./components/Filters";
import { useEffect } from "react";
import { useState } from "react";
import { createNote, fetchNotes } from "~services/notes";
import Pagination from "~components/Pagination";


function App() {
  //get, post notes + filters
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState({
    search: "",
    sortItem: "date",
    sortOrder: "desc",
  });

  useEffect(() => {
    const fetchData = async () => {
      let notes = await fetchNotes(filter);
      setNotes(notes?.data.notes);
    }

    fetchData();
  }, [filter])

  const onCreate = async (note: any) => {
    await createNote(note);
    let notes = await fetchNotes(filter);
    setNotes(notes?.data.notes);
  }

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const notesPerPage = 3;

  const lastNoteIndex = currentPage * notesPerPage;
  const firstNoteIndex = lastNoteIndex - notesPerPage;
  const currentNotes = notes.slice(firstNoteIndex, lastNoteIndex);

  return (
    <section>
      <div>
        <CreateNoteForm onCreate={onCreate} />
        <Filters filter={filter} setFilter={setFilter} />
      </div>

      <div>
        <ul>
          {currentNotes.map((item: any, index: number) =>
          (<li key={index}>
            <Note
              title={item.title}
              description={item.description}
              createdAt={item.createdAt}
            />
          </li>)
          )}
        </ul>
        <Pagination totalNotes={notes.length} notesPerPage={notesPerPage} currentPage={currentPage} />
      </div>
    </section>
  );
}

export default App;