const { schema, model } = require("mongoose");

const postSchema = new schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const post = model("post", postSchema);

module.exports = post;
