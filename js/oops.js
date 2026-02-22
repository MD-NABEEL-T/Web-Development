// let obj={
//     'a':1,
//     'b':"Nabeel"
// }
// console.log(obj)

// let animal={
//     eats:true
// }
// let rabbit ={
//     jumps:true
// }

// rabbit.__proto__=animal; //therefore the props of animal will be coming in rabbit so if you run rabbit.eats => true .

class Animal{
    constructor(name){
        this.name=name
        console.log("I am "+name)
        console.log("OBJECT is created")
    }
    eats(){
        console.log("I eat")
    }
}
class Dog extends Animal{//similar to that in java
    }
let a =new Animal("IRON MAN")
a.eats()

//super keyword .

console.log(Dog instanceof Animal)