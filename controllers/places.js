const express = require('express')
const router = express.Router();

router.get('/',(req,res) => {
    let places = [{
        name: 'Savor',
        city: 'Somerville',
        state: 'NJ',
        cuisines: 'Steaks, seafood, housemade pastas & more served in a classy atmosphere with sidewalk tables.',
        pic: '/images/flowers.png'
      }, {
        name: 'Cafe Picasso',
        city: 'Somerville',
        state: 'NJ',
        cuisines: 'Southern Italian specialties, pastas & espresso bar in rustic, art-filled venue with outdoor dining.',
        pic: '/images/lobster.png'
      }]
    res.render('places/index',{places});
})

router.post('/',(req,res) => {
    console.log(req);
    res.send(`<h1>Post /places</h1>`);
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

module.exports = router