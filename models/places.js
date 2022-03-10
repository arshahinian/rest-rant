const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: {type: String, default: '/images/PlaceHolder.png'},
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: {
    type: Number,
    min: [1673,'There is no way this place is that old!'],
    max: [new Date().getFullYear(),'Are you from the future?  What are the winning lotto numbers?']
  },
  comments:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Comment'
  }]
})

placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchema)