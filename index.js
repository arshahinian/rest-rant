const express = require('express')

const app = express()

require('dotenv').config()

const PORT = process.env.PORT;
const AUTH = process.env.AUTH;
console.log(`ENV PORT: ${PORT}`)
console.log(`ENV AUTH: ${AUTH}`)

app.set('view engine','jsx')
app.engine('jsx',require('express-react-views').createEngine())

app.get('/',(req,res) => {
    let randomNumber = Math.random();
    console.log(randomNumber)
    res.render(`home`);
})

app.get('/count/:ceiling',(req,res) => {
    console.log(req.params);
    let ceiling = Number(req.params.ceiling);
    let randomNumber = Math.random();
    console.log(randomNumber)
    let roundNumber = Math.round(randomNumber * ceiling)
    console.log(roundNumber)
    let message = '';
    for(let i = 0;i < roundNumber;i++)
    {
        message = message + '[' + i + ']'
    }    

    res.send(`<h1>${message}</h1>`);
})

// STATIC
app.use(express.static('public'))

app.use('/places',require('./controllers/places.js'))

app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(PORT,() => {
    console.log('listening on port: ',PORT);
})