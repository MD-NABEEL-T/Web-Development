const fs=require("fs")
//also we can do fs=require("fs/promises")

// console.log(fs)

console.log("Starting")

//use writeFile not writeFileSync 
// fs.writeFileSync("Nabeel.txt","I AM IRON MAN")

fs.writeFile("Nabeel2.txt","I CAN DO THIS ALL DAY",()=>{
    console.log("DONE")

    fs.readFile("Nabeel2.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})

fs.appendFile("Nabeel2.txt","There has never been another steve rogers, has there?",(e,d)=>{
    console.log(d)
})


console.log("Ending")