const express = require('express')
const app = express()
const port = 3000
const fs=require('fs')
// app.use(express.static('public'))

//middleware 1
app.use((req, res, next) => {
  fs.appendFileSync('log.txt',`${Date.now()}\n`)
  console.log('LOGGED data')
  next()
})

// middleware 2
app.use((req, res, next) => {
  console.log('LOGGED 2')
  next()
})

app.get('/', (req, res) => {
  res.send('Love yourself first')
})
app.get('/contact', (req, res) => {
  res.send('ask yourself first')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})