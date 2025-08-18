const name = "sohail"

const repoCount = 1

// console.log(name + repoCount + " value");// old style

// template literals (modern style) 
console.log(`hello i'm ${name} and my repo value is ${repoCount}`);

// String objects and properties
const fullName =new String ("Mohammed Sohail");
console.log(fullName.__proto__);
console.log(fullName.length);
console.log(fullName.charAt('0'));
console.log(fullName[5]);
console.log(fullName.indexOf('d',4));

// String methods
const newName = fullName.toUpperCase();
console.log(newName);

const firstName = fullName.substring(0,8);
console.log(firstName);

const lastName = fullName.substring(9);
console.log(lastName);

console.log(fullName.trim());
console.log(fullName.slice(-8,16)); // nth index - negative index

// Url manipulation
const url1 = "https:://sohail@google.com/sohail%20mohammed";
console.log(url1.replace('%20','.'));
console.log(url1.includes('sohail'));




// String splitting
const intro1 = "my name is walter hartwell white";
const words = intro1.split(" ");
console.log(words.length);
console.log(words[3])
console.log(intro1.split(""));
console.log(intro1.length);

const strCopy =intro1.split();
console.log(strCopy);

