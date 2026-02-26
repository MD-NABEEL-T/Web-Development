import fs from "fs/promises"
// no need of async function here to use await
let a =await fs.readFile("Nabeel.txt")
let b= await fs.appendFile("Nabeel.txt","\n \n Alright its finally over now i am over it because of this fucking workouts")
console.log(a.toString())