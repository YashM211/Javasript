let score ="ab33"

console.log(typeof(score));
console.log(typeof score);

let valInNumber = Number(score);
console.log( typeof valInNumber)
console.log(valInNumber);

//"33" =>33
//"33abc" =>NaN
// true=>1 ; false =>0

let isLoggedIn = 1

let boolenisLoggedIn = Boolean(isLoggedIn);
console.log(boolenisLoggedIn);

//1=>true , 0=>false
//" => false;
//"yash" =>true

let someNumber = 33
let stringNumber = String(someNumber);

console.log(stringNumber)
console.log(typeof(stringNumber));


let str1 = "hello"
let str2 = " yash"
let str3 = str1+str2

console.log(str3);

console.log("1" +2); //12
console.log(1+"2"); //12
console.log("1"+2+2); //122
console.log(1+2+"2");//32 

console.log(3 + 4 / 2 * 5 % 3 ) //4
//divide , Multiply , Modulo ,add
console.log(+true)
console.log(true)

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);