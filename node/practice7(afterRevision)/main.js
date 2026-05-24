const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')

app.use(express.static('public'))
app.use('/blog',blog)

//Chaining and for understanding purpose
app.get('/', (req, res) => {
  res.send('Hello World!')
}).post('/', (req, res) => {
  res.send('Hello World!2')
})

// app.get('/index', (req, res) => {
//   res.send('Hello bhenjho')
// })
//this code prints the message hello bhenjho when we go to the url http://localhost:3000/index but i need the index.html page so we do this below 

app.get('/index', (req, res) => {
  console.log("Hey i am in index page")
  res.sendFile(__dirname + '/templates/index.html')
})

app.get('/api',(req,res)=>{
  console.log("using some api lets assume")
  res.json({a:2,b:34,c:32,name:["nabeel","Ironman"]})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})