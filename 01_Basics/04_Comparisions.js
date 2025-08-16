// same datatype comparisions

console.log(2 == 1);
console.log(2 > 1);
console.log(2 < 1);
console.log(2 >= 1);
console.log(2 <= 1);
console.log(2 != 1);

// different datatypes comparisions

console.log("2" > 1);
console.log("02" > 1 ) 

// comparisions of null and undefined

console.log(null > 0 ); 
console.log(null == 0 );
console.log(null >=0 ); // when equallity check "==" is used null is treated as null but when comparisions ">,<.,=<,=>" are used null is converted into 0.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0); // undefined is undefined 


console.log("2" == 2); // == works with different datatypes 
console.log(2 === 2);  // === works only with similar datatypes