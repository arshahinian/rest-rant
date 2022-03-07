const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: Number
})

placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchema)

/* PENDING TO BD DELETED */
// module.exports = [{
//     name: 'Hungry Hamburger',
//     city: 'Somerville',
//     state: 'NJ',
//     cuisines: 'Hamburgers, Fries, and great Soda.',
//     pic: '/images/HungryHamburger.png'
//   }, {
//     name: 'Main Street Pizza',
//     city: 'Somerville',
//     state: 'NJ',
//     cuisines: 'Pizza, Salad, and Soups of all types.',
//     pic: '/images/MainStreetPizza.png'
//   }, {
//     name: 'The Good Cone',
//     city: 'Somerville',
//     state: 'NJ',
//     cuisines: 'Ice Cream, Cake, and Good Coffee.',
//     pic: '/images/TheGoodCone.png'
//   }]