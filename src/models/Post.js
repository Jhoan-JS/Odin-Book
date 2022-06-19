const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  content: {
    type: String,
    trim: true,
  },

  imgsUrl: [
    {
      type: String,
      required: false,
    },
  ],

  timestamp: { type: Date, required: true },

  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],

  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const PostModel = mongoose.model('Post', PostSchema);

module.exports = PostModel;
