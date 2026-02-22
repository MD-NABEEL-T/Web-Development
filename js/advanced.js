async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("IRON MAN")
        }, 1000);
    })
}

// IIFE -> Immediately Invoked Function Expression 
(async function main() {
    let a = await sleep()
    console.log(a)
})()

// let x,y=[1,5]
// console.log(x,y)
// will show undefined so use this below

// let [x, y] = [1, 5]
// console.log(x, y)

let [a,b, ...rest]=[1,2,3,4,5,6,7]
console.log(a,b,rest)

let obj={
    i:1,
    j:4,
    k:3
}
const {i,j,k}=obj
console.log(i,j,k) 