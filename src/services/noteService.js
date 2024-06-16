// src/services/noteService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/notes';

export const getNotes = async () => {
	const response = await axios.get(API_URL);
	return response.data;
};

export const addNote = async (note) => {
	const response = await axios.post(`${API_URL}/add`, note);
	return response.data;
};

export const deleteNote = async (id) => {
	const response = await axios.delete(`${API_URL}/${id}`);
	return response.data;
};

export const updateNote = async (id, note) => {
	const response = await axios.post(`${API_URL}/update/${id}`, note);
	return response.data;
};
