const mongoose = require('mongoose');

// ----------------------
// Locations
// ----------------------
const locationsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  datePosted: { type: Date, default: Date.now },
  // If we want to include photos. Save photo url
  pictures: [{ type: String, match: /^(http|https):\/\//i }],
  description: { type: String, required: true },
  long: { type: String },
  lat: { type: String },
  Lot: {
    type: {type:  String },
    alottedNumber: {type: Number},
    availableNumber: {type: Number},
  },
  Address: {
    // some fields for location's address
    street: { type: String },
    city: { type: String },
    country: { type: String }
  },
  downvote: {
    // store User ID. UI can display count with array length
    type: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    default: () => [],
  },
  upvote: {
    // store User ID. UI can display count with array length
    type: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    default: () => [],
  },
  weighting: { type: String }, // can be used for promotional purposes
  hours: {
  Sun: { type: String },
  Mon: { type: String },
  Tues: { type: String },
  Wed: { type: String },
  Thus: { type: String },
  Fri: { type: String },
  Sat: { type: String }
  },
})

module.exports = {
  User: mongoose.model('Location', locationsSchema)
}
