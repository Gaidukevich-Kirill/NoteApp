import * as React from "react";
import './CreateNoteForm.css';
import { useState } from "react";

interface Note {
    title?: string;
    description?: string;
}

export default function CreateNoteForm({onCreate}:any){
  const [note, setNote] = useState<Note>({});
  
  const onSubmit = (e : any) => {
    //e.preventDefault();
    setNote({});
    onCreate(note);
  };

  return(
    <form onSubmit={onSubmit}>
        <h3>Создание заметки</h3>
        <input 
          placeholder = "Название"
          value={note?.title ?? ""}
          onChange={(e) => setNote({ ...note, title: e.target.value})}
        />
        <textarea 
          placeholder="Описание"
          value={note?.description ?? ""}
          onChange={(e) => setNote({ ...note, description: e.target.value})}
        />
        <button type="submit">
          Создать
        </button>
    </form>
  );
}