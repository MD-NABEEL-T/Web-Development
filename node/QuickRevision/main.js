const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public')) // ⭐ IMPORTANT
// express.static('public') allows the server to serve frontend files so the browser can access them through URLs.
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/about',(req,res)=>{
    res.send('This is the about page')
})

app.post('/',(req,res)=>{
    console.log("Hey its a post request")
    res.send("Hello post ")
})

app.put('/',(req,res)=>{
    console.log("Hey its a put request")
    res.send("Hello put ")
})
app.get('/:slug',(req,res)=>{
    res.send(`hello ${req.params.slug}`)
})

// so the page you enter will be said hello

