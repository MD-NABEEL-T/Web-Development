const express = require('express')
const app = express()
const port = 3000


// Browser sends a GET request
// Express checks if a matching app.get() route exists
// If yes → runs that handler
// app.use(express.static('public'))


//with the help of this we can access the files inside public dir

// app.get or app.post or app.post or app.delete(path,handler)
app.get('/', (req, res) => {
  res.send('I Am Iron Man World!')
})

app.get('/about', (req, res) => {
  res.send('About')
})

app.get('/contact', (req, res) => {
  res.send('Contact us!')
})

app.get('/blog/:slug', (req, res) => {
  //logic to fetch {slug } from the db
  res.send(`hello ${req.params.slug}`)
})

app.get('/blog', (req, res) => {
  res.send('blog about me')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})