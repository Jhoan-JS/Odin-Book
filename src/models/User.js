const mongoose = required('mongoose');

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please tell us your email'],
    trim: true,
  },

  lastName: {
    type: String,
    required: [true, 'Please tell us your email'],
    trim: true,
  },

  email: {
    type: String,
    required: [true, 'Please tell us your email'],
    trim: true,
    unique: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false,
  },

  confirmPassword: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      validator: function (val) {
        return val === this.password;
      },
      message: 'Password are not the same',
    },
  },
  friends: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  },

  friendRequests: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
