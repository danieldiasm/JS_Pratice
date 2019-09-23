// Lesson 22 - Arrays
// Already played weith this on challenge 02

//Init arrays
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

//shown some data
console.log(names[0]);
console.log(names);
console.log(names.length);

//Mutated array
names[1] = 'Ben';
console.log(names);

names[names.length] = 'Mary'
console.log(names);

// Different data types
var thomas = ['Thomas','Anderson',1990,'programmer',true];

thomas.push('blue');
console.log(thomas);

thomas.unshift('Mr.');

//removes a determined item
thomas.pop('blue');
console.log(thomas);

thomas.push('red');
console.log(thomas);

//removes the last one if not specified
thomas.pop();
//removes the first one if not specified
thomas.shift();
console.log(thomas);

console.log(thomas.indexOf(123));

var metier = thomas.indexOf('designer') === -1 ? 'Thomas is NOT a designer' : 'Thomas is a a designer';
metier1 = thomas.indexOf('programmer') === -1 ? 'Thomas is NOT a programmer' : 'Thomas is a programmer';
chosenOne = thomas.indexOf(4) == true ? 'Thomas is NOT the chosen one' : 'Thomas is the chosen one';
console.log(metier);
console.log(metier1);
console.log(chosenOne);