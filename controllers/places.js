const express = require('express')
const router = express.Router();

router.get('/',(req,res) => {
    res.send(`<h1>Get /places</h1>`);
})

router.post('/',(req,res) => {
    console.log(req);
    res.send(`<h1>Post /places</h1>`);
})


module.exports = router