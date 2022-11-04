// Configuring dotenv
require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const post = require('./schema');
const port = process.env.PORT || 3000;
const MONGOURI = process.env.MONGOURI || 'mongodb://localhost:27017/';
const MONGODB = process.env.MONGODB || 'slcm_labb2';

// Connect to MongoDB
const mongoURI = `${MONGOURI}${MONGODB}`;
mongoose.connect(mongoURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error while connecting to MongoDB using the following mongoURL: "' + mongoURI + '"'));
db.once('open', function () {
	console.log('Connection has been established successfully to MongoDB.');
});

// Configure express with body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Configure express for CORS
app.use(cors());

//Configure static directory for express
app.use(express.static('public'));

app.get('/', async (_, res) => {
	res.status(200).send(await post.find().sort({ createdAt: -1 }));
});

app.post('/', async (req, res) => {
	const postContent = req.body.content;
	await post.create({ content: postContent });
	res.status(200).send({
		message: 'Post created successfully'
	});
});

//Start express server
app.listen(port, () => console.log(`Server started on port ${port}`));
