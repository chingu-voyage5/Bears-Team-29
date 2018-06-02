const mongoose = require('mongoose');

// ----------------------
// USERS
// ----------------------
const usersSchema = new mongoose.Schema({
  // required for authentication: DO NOT TOUCH 
  email:     { type: String, required: true },
  password:  { type: String, required: true },

  createdAt: { type: Date, default: Date.now },
  profile: {
		username: {
			type: String,
		}, 
		picture: { //Facebook oauth will postback profile img
			type: String,
			match: /^https?:\/\//i
			// required: true ->set to be not required
		}
  },
  data: {
		oauth: { 
			//social media ID or local token
			type: String,
			required: true
		},
		loginMethod: { 
			//facebook, google, local
			type: String
		},
		displayName: { 
			type: String
		},
    saved: {
      type: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location',
      }],
      default: () => [],
    },
    vote: {
      // if ID exist, remove from opposite list and update the current list
      up: {
        type: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Location',
        }],
        default: () => [],
      },
      down: {
        type: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Location',
        }],
        default: () => [],
      },
    },
  }
})

module.exports = {
  User: mongoose.model('User', usersSchema)
}
