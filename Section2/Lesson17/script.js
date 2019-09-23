// Lesson 17 - Truthy or Falsy

// Falsy values: Undefined, null, 0, '', Not a Number
// Not exacly false values, but becomes false in a boolean eval

// Truthy values: All values not falsy

var height;

//When defined it becomes truthy
height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

//Equality operators
if (height == '23') {
    console.log('The == operator does type coercion!')
}
