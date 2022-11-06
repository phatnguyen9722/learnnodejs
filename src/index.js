const express = require('express')
const hbs = require('express-handlebars')
const morgan = require('morgan')
const app = express()
const port = 3000
const path = require('path')

console.log("__dirname", __dirname);

app.use(express.static(path.join(__dirname,'public')));
// morgan : HTTP logger 
app.use(morgan('combined'));

// express handlebars
app.engine('hbs', hbs.engine({
  extname:'.hbs' 
}))
app.set('view engine', 'hbs');
app.set('views', './src/resources/views')

// route : tuyen duong 
app.get('/home', (req, res) => {
  return res.render('home');
})

app.get('/news', (req, res) => {
  return res.render('news');
})

// 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})