let prom1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Yes i am done")
        resolve("Iron man")
    }, 3000);
})

// if resolved.
prom1.then((a)=>{
    console.log(a)
})

// how to use reject 
let prom2=new Promise((resolve,reject)=>{
    let b=Math.random()
    if(b<0.5){
        reject("YOU FAILED AT LOVE")
    }
    else{
        resolve("but ....YOU DIDNT FAILED IN LOVING")
    }
})
prom2.then((a)=>{
    console.log(a)
})//continuation if needed is below

// if you dont want to show reject as error then write this 
// }).catch((err)=>{
//      console.log(err)})

// Promise.all used for all promises resolved then only things will work 

let p3=Promise.all([prom1,prom2]).then((a)=>{
    console.log("Sometimes its better to let go things right????....")
})

//promise.allSettled used when all the promises have been executed even if resolved or rejected. 
//but promise.all executes only when resolved 

// Promise.any-> waits for the first promise that has been resolved ok.