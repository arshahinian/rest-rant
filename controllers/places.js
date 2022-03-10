const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})

router.post('/', (req, res) => {
  
  // if pic is '', change it to `undefined` to enable the default
  // since our form sends an empty string, the schema considers the value to exist (technically)
  req.body.pic = req.body.pic || undefined

  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
    console.log(place.comments)
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.put('/:id', (req, res) => {
  
    // get the ID   
    const id = req.params.id       

    // if pic is '', change it to `undefined` to enable the default
    // since our form sends an empty string, the schema considers the value to exist (technically)
    req.body.pic = req.body.pic || undefined
    
    // .orFail forces the method below to throw an error if the ID is not found
    // which activates the .catch callback and sends a 404
    // this is something you _can_ do, but it's not necessarily the best move in all situations   
    db.Place.findByIdAndUpdate(id, req.body).orFail()
        .then(updatePlace => {
          console.log("updatePlace", updatePlace);
          res.redirect(`/places/${id}`);          
        })
        .catch(err => {
          console.log('err', err)
          res.render('error404')
        })
})

router.delete('/:id', (req, res) => {
  
  // get the ID 
  const id = req.params.id

  db.Place.findByIdAndDelete(id)
        .then(deletedPlace => {
          console.log(deletedPlace)
          res.status(303).redirect('/places')
        }).catch(err => {
          console.log('err', err)
          res.status(404).render('error404')
        })
})

router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id).orFail()
    .then(foundPlace => {
      res.render('places/edit', {place: foundPlace})
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
})

router.get('/:id/rant', (req, res) => {
  res.render('places/newComment',{id: req.params.id})
})

router.post('/:id/rant', (req, res) => {
  console.log(req.body)

  if (req.body.rant === "on") {
    req.body.rant = true
  } else {
    req.body.rant = false
  }

  db.Place.findById(req.params.id)
  .then(place => {
    console.log("Create comment")
    db.Comment.create(req.body)
    .then(comment =>{
        console.log("Save comment id to place")
        place.comments.push(comment._id)
        place.save()
        .then(() =>{
          res.redirect(`/places/${req.params.id}`);
        })
    })
    .catch(err => {
      res.render('error404')
    })
  })
  .catch(err => {
    res.render('error404')
  }) 
  
})

// router.delete('/:id/rant/:rantId', (req, res) => {
//     res.send('GET /places/:id/rant/:rantId stub')
// })

module.exports = router