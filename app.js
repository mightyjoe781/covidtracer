//--------------------------------------------------------------------
// Imports

const express       = require('express')
const bodyParser    = require('body-parser')
const chalk         = require('chalk')
const lusca         = require('lusca')


const app = express()

app.set("view engine","ejs")
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//--------------------------------------------------------------------
// Routes
app.get('/', (req, res) => {
  res.render('landing.ejs')
})

app.get('/map', (req, res) => {
  res.render('map.ejs')
})

app.get('/contact', (req, res) => {
  res.render('contact.ejs')
})

app.get('*', (req, res) => {
  res.render('404')
})

//--------------------------------------------------------------------
// Server Parameter

const hostname = '127.0.0.1'
const port = 3033
app.listen(port,hostname, () => {
  console.log(`Server started at http://${hostname}:${port}`)
  console.log('  Press CTRL+c to stop!')
})
