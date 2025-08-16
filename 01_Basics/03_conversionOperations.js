let score = "33kfk";

//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score);

//console.log(typeof valueInNumber)
//console.log(valueInNumber)

// "33" => 33
// "33kfk" => NaN
// true => 1; false => 0

let isLoggedIn = "sohail"

let booleanIsLoggedIn = Boolean(isLoggedIn)

//console.log(booleanIsLoggedIn)
//console.log(typeof isLoggedIn)

// 1 => true: 0 => false
// "" => false 
// "sohail" => true


let someNumber = 55;
let stringNumber = String(someNumber)

//console.log(someNumber);
//console.log(typeof stringNumber)


let value = 3;
let negValue = -value ;

/*
console.log(value)
console.log(negValue);

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 3);
console.log(2 / 2);
console.log(2 % 2);
*/
let str1 = "hello";
let str2 = " Sohail";
let str3 = str1 + str2;
console.log(str3);

let a = 20;
let b = a++; // this is post increment , 1st a is assigned to b and then it's value is increased
console.log(b);
console.log(a);

let c = 20;
let d = ++c; // this preincrement, 1st the value is increased and then it is  assigned
console.log(c);
console.log(d);

// () , have the highest precedence
// (*,/,%) have higher precedence than (+,-)
// Same precedence: Left→Right, except =, **, ?: (Right→Left)

let num1, num2, num3 ;

num1 = num2 = num3 = 4 + 4;
console.log(num1)




