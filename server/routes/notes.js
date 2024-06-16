// backend/routes/notes.js
const express = require('express');
const router = express.Router();
const Note = require('../models/note.model');

router.route('/').get((req, res) => {
	Note.find()
		.then(notes => res.json(notes))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	const content = req.body.content;
	const newNote = new Note({ content });

	newNote.save()
		.then(() => res.json(newNote))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
	Note.findByIdAndDelete(req.params.id)
		.then(() => res.json('Note deleted.'))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
	Note.findById(req.params.id)
		.then(note => {
			note.content = req.body.content;

			note.save()
				.then(() => res.json('Note updated!'))
				.catch(err => res.status(400).json('Error: ' + err));
		})
		.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
