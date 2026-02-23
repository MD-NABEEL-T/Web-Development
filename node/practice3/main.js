// const http=require('node:http')

// const hostname='127.0.0.1'
// const port=3000
// const server =http.createServer((req,res)=>{
//     res.statusCode=200
//     res.setHeader('Content-Type','text/html')
//     res.end('<h1>T MOON</h1> \n')
// })
// server.listen(port,hostname,()=>{
//     console.log(`Server running at http://${hostname}:${port}/`)
// })


// Feature 	CommonJS (CJS)	ECMAScript Modules (ESM)
// Syntax	require() / module.exports	import / export
// Loading	Synchronous (blocking)	Asynchronous (non-blocking)
// Platform	Native to Node.js; needs bundlers for browsers	Native to modern browsers and Node.js (13.2.0+)
// my module1 
import {a,b,d} from "./mymodule.js"
import Ironman from "./mymodule.js"

console.log(a,b,d)
console.log(Ironman)
// default means it will be imported default with any name you can access like i used ironman



//my module2
// const a=require("./mymodule2.js")
// console.log(a)

