// frontend/src/components/NoteForm.js
import React, { useState } from 'react';
import { addNote } from '../services/noteService';

const NoteForm = ({ onNoteAdded }) => {
	const [content, setContent] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newNote = await addNote({ content });
		onNoteAdded(newNote);  // Passa la nuova nota al callback
		setContent('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={content}
				onChange={(e) => setContent(e.target.value)}
				placeholder="Scrivi un nuovo appunto"
			/>
			<button type="submit">Aggiungi</button>
		</form>
	);
};

export default NoteForm;
