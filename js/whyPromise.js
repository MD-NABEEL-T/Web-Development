function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(455)
        }, 2000);
    })
}
let data=getData()
console.log(data)

console.log("ALRGIHT DONE")