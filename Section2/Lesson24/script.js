// Lesson 24 - Objects and Methods
// Attach functions to objects (named as methods)


// Object Literal
var thomas = {
    firstName: 'Thomas',
    lastName: 'Anderson',
    birthYear: 1988,
    family: ['Morpheus','Trinity','Tank','Mouse'],
    job: 'programmer',
    isMarried: false,
    calcAge: function() {
        this.age = 2019 - this.birthYear;
    }
};

thomas.calcAge();

console.log(thomas);
