// frontend/src/components/NoteList.js
import React from 'react';
import { deleteNote } from '../services/noteService';

const NoteList = ({ notes, setNotes }) => {
	const handleDelete = async (id) => {
		await deleteNote(id);
		setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
	};

	return (
		<div>
			<h2>Appunti</h2>
			<ul>
				{notes.map((note) => (
					<li key={note._id}>
						{note.content}
						<button onClick={() => handleDelete(note._id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default NoteList;
