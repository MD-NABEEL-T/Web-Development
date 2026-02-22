async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(324)
        }, 2000)
    })
}
async function main() {
    console.log("loading modules")
    console.log("Loading data")
    let data = await getData();
    console.log(data)
    console.log("END.")
}
main()

// also we can use fetch(api link) for some purpose
//then convert to json parsing

//for example
// let x=await fetch('https:://jsonplaceholder.com/todos/1')
// let data = await x.json()
//console.log(data)