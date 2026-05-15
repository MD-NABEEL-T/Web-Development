const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let siteName="Adidas"
  let searchText="lorem ipsum"
  // res.sendFile('/templates/index.html', { root: __dirname })
  res.render("index",{siteName:siteName,searchText:searchText})
})

app.get('/blog/:slug',(req,res)=>{
  let blogTitle ="My brand"
  let blogContent = "lorem23"
  res.render("templates/blogpost.html",{blogTitle:blogTitle,blogContent:blogContent})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})