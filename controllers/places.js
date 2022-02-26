const express = require('express')
const router = express.Router();

router.get('/',(req,res) => {
    let places = [{
        name: 'Hungry Hamburger',
        city: 'Somerville',
        state: 'NJ',
        cuisines: 'Hamburgers, Fries, and great Soda.',
        pic: '/images/HungryHamburger.png'
      }, {
        name: 'Main Street Pizza',
        city: 'Somerville',
        state: 'NJ',
        cuisines: 'Pizza, Salad, and Soups of all types.',
        pic: '/images/MainStreetPizza.png'
      }, {
        name: 'The Good Cone',
        city: 'Somerville',
        state: 'NJ',
        cuisines: 'Ice Cream, Cake, and Good Coffee.',
        pic: '/images/TheGoodCone.png'
      }]
    res.render('places/index',{places});
})

router.post('/',(req,res) => {
    console.log(req.body);
    res.send(`<h1>Post /places</h1>`);
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

module.exports = router