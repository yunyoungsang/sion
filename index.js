const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://0303yun:sion123456@cluster0.jy0km.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    
}).then(( )=> console.log('MongoDB connected...'))
.catch(err => console.log(err)) 


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
