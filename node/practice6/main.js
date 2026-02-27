const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))
app.get('/', (req, res) => {
    console.log("Hey its a request")
    res.send('I Can Do This All Day!')
})

app.post('/', (req, res) => {
    console.log("Hey its a post request")
    res.send('Hello By post')
}).put('/', (req, res) => {
    console.log("Hey its a put request")
    res.send('Hello By put')
}).listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get("/index", (req, res) => {
    console.log("Hey its index")
    res.sendFile('templates/index.html', {root:__dirname})  
    res.send('Hello By index')
}) 
