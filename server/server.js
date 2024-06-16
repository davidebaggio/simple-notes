// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
	console.log('MongoDB database connection established successfully');
});

// Define a simple route
app.get('/', (req, res) => {
	res.send('Hello World!');
});

// Routes
const notesRouter = require('./routes/notes');
app.use('/notes', notesRouter);

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
