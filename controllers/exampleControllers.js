const express = require('express')
const router = express.Router();
//console.log(router);
router.get('/',(req,res) => {
    res.send('Chitty Chitty Bang Bang')
})

router.get('/example/request',(req,res) => {
    res.send(`<h1>Get Request</h1>`);
})

router.post('/example/request',(req,res) => {
    console.log(req);
    res.send(`<h1>Post Request</h1>`);
})

router.get('*',(req,res) => {
    res.send('<h3>You are sort of lost!</h3>')
})

module.exports = router