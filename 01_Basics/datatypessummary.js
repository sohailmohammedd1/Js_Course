
// primitive datatypes
// 7 types

// String,Number,Bigint,boolean,null,undefined,symbol

const score = 124;
const scorevalue = 123.98;
const str = "sohail";
const isLoggedIn = true;
const outsideTemp = null;
let state ;

let bigNumber = 198578474n; // when u end a number with 'n' it returns bigInt

const id = Symbol.for('123')
const anotherId = Symbol.for('123') // symbol.for() give true value 
console.log(id === anotherId)// tho symbol is primitive datatype but every symbol is unique


// Reference datatypes (non primitive)

// Arrays,Objects and Functions



let isArray = ['batman','superman'];

let isObj = {
    name : "sohail",
    age : "26"
}

const account = function ()
{
    console.log("hello world");
    return;
}

console.log(isArray)
console.log(isObj)

console.log(typeof isArray);

account(); // to call/ execute the function
console.log(account)// returns [function : account] only prints , doesn't execute


// https://262.ecma-international.org/5.1/#sec-11.4.3
/////////////// stack and heap memory /////////////////////

// primitives datatypes are stored in stack and non primitives in heap memory 

let iOne = "sohail";

let iTwo = iOne;
iTwo = "Khabib";

console.log(iOne);
console.log(iTwo);

let user1 = {
    email : "sohail@meta.com",
    call : 989893
} 

let user2 = user1;

user2.email = "sohail@oracle.com";

console.log(user1.email);
console.log(user2.email);
