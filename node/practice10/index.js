import fs from "fs/promises";
// console.log(fs)
let files=await fs.readdir("E:\\Nabeel\\Web-Development\\node\\practice10")
console.log(files)