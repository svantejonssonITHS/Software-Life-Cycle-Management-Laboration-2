const { Schema, model } = require('mongoose');

const postSchema = new Schema({
	content: {
		type: String,
		required: true,
		maxlength: 35
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

const post = model('post', postSchema);

module.exports = post;
