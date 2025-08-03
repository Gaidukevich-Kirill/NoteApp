import * as React from "react";
import './App.css';
import CreateNoteForm from "./components/CreateNoteForm";
import Note from "./components/Note";
import Filters from "./components/Filters";
import Pagination from "./components/Pagination";
import { useEffect, useState } from "react";
import { createNote, fetchNotes, fetchPaginateNotes } from "~services/notes";
import { FilterItem } from "./models/filterItem"



function App() {

  const notesPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentNotes, setCurrentNotes] = useState([]);
  const [elementCount, setElementCount] = useState(0);
  const [notes, setNotes] = useState([]);
  
  const fetchData = async () => {
    let result = await fetchPaginateNotes(filter, currentPage);
    
    setElementCount(result.output.elementCount);
    setCurrentNotes(result.output.records);
  }

  const [filter, setFilter] = useState<FilterItem>({
    search: "",
    sortItem: "date",
    sortOrder: "desc",
    pageSize: notesPerPage,
    startSearchDate: null,
    endSearchDate: null
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchData();
  }, [filter,currentPage])

  const onCreate = async (note: any) => {
    await createNote(note);
    let notes = await fetchNotes(filter);
    setNotes(notes?.data);
  }

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
              id={item.id}
              title={item.title}
              description={item.description}
              createdAt={item.createdAt}
              callbackOnDelete={async()=>await fetchData()}
            />
          </li>)
          )}
        </ul>

        <Pagination
          totalNotes={elementCount}
          notesPerPage={notesPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange} />
      </div>
    </section>
  );
}

export default App;