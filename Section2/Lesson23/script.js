// Lesson 23 - Objects and Properties


// Object Literal
var thomas = {
    firstName: 'Thomas',
    lastName: 'Anderson',
    birthYear: 1980,
    family: ['Morpheus','Trinity','Tank','Mouse'],
    job: 'programmer',
    isMarried: false
};

console.log(thomas.firstName);
console.log(thomas['lastName']);

var x = 'birthYear';
console.log(thomas[x]);

thomas.job = 'designer';
thomas['isMarried'] = true;
console.log(thomas);

//new Object syntax
var Trinity = new Object();
Trinity.firstName = 'Trinity';
Trinity.birthdayYear = 1990;
Trinity['lastName'] = 'Anderson';
console.log(Trinity);
