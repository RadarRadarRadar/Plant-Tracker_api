const mongoose = require('mongoose')

const plantSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  stage: {
    type: String,
    required: false
  },
  light: {
    type: String,
    required: false
  },
  water: {
    type: String,
    required: false
  },
  soil: {
    type: String,
    required: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Plant', plantSchema)
