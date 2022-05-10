const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const { User } = require('./models/User');


app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://0303yun:sion123456@cluster0.jy0km.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    
}).then(( )=> console.log('MongoDB connected...'))
.catch(err => console.log(err)) 


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', (req, res) => {

  const user = new User(req.body)
  user.save((err, user) => {
    if (err) return res.json({ success: false, message: err })
    return res.status(200).json({
      success: true
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
