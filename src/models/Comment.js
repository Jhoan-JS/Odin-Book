const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

  comment: {
    type: String,
    required: [true, 'Please write a comment'],
    maxlength: 300,
  },

  timestamp: {
    type: Date,
    required: true,
  },

  likes: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
});

const CommentModel = mongoose.model('Comment', CommentSchema);

module.exports = CommentModel;
