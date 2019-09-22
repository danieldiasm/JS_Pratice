//This is a single line comment

/*
var firstVariable = "Daniel";
console.log(firstVariable);

var secondVariable = "Z. Dias de Moraes";
var age = 30;

console.log(firstVariable+" "+secondVariable+" ist "+age+" jahe alt.")

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';

console.log(job);
*/

var firstName = 'John';
var age = 28;

//Type coercion
console.log(firstName + ' ' + age);

//Creating multiple variables at once
var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');

console.log(firstName + ' ' + lastName);