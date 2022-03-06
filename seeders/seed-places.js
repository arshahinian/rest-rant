const db = require('../models')

db.Place.create([{
        name: 'Hungry Hamburger',
        city: 'Somerville',
        state: 'NJ',
        cuisines: 'Hamburgers, Fries, and great Soda.',
        pic: '/images/HungryHamburger.png',
        founded:2020
      }, {
        name: 'Main Street Pizza',
        city: 'Somerville',
        state: 'NJ',
        cuisines: 'Pizza, Salad, and Soups of all types.',
        pic: '/images/MainStreetPizza.png',
        founded:2021
      }, {
        name: 'The Good Cone',
        city: 'Somerville',
        state: 'NJ',
        cuisines: 'Ice Cream, Cake, and Good Coffee.',
        pic: '/images/TheGoodCone.png',
        founded:2022
      }])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})