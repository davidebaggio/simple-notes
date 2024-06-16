// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import { getNotes } from './services/noteService';
import './App.css'

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      const notes = await getNotes();
      setNotes(notes);
    }
    fetchNotes();
  }, []);

  const handleNoteAdded = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
    <div className="App">
      <h1>App per Prendere Appunti</h1>
      <NoteForm onNoteAdded={handleNoteAdded} />
      <NoteList notes={notes} setNotes={setNotes} />
    </div>
  );
};

export default App;
