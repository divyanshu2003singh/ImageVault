// models/Image.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ImageSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  imageUrl: {
    type: String,
    required: true
  }
});

module.exports = Image = mongoose.model('images', ImageSchema);

