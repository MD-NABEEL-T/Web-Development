// THIS FAULTY CALC DOES :
// takes two input as an input from the user 
// it performs wrong operations such as - instead of +
// and * instead of /
// only performs this kind of operations 10% of the time
let random=Math.random()
let a=prompt("Enter first number")
let c=prompt("Enter operation")
let b=prompt("Enter the second number")

let obj={
    "*":"/",
    "/":"*",
    "+":"-",
    "-":"+"
}
if(random>0.1){
    //perform correct calculations
    console.log(`The Result is ${eval(`${a}${c}${b}`)}`)
}
else{
    //perform wrong calculations
    c=obj[c];
    console.log(`The Result is ${eval(`${a}${c}${b}`)}`)

}