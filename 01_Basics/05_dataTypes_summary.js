// Primitive

//7 types : String , Number , Boolean , NULL , undefined , Symbol,BigInt

const score = 100
const scoreVal = 0.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123');

console.log(id===anotherId) //f

const bigNumber = 23143463453534n

//Reference Type (Non Primitive

//Array,Objects,Functions

const heros = ["shaktiman" , "naagraj" , "doga"]; //Object
console.log(typeof heros)
let myObj = {
    name:"hitesh",
    age:22,
} // object

const myFunction = function(){
    console.log("Hello World");
} //object function