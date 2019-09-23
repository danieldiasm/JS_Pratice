// Lesson 18 - Functions

function calculAge(birthYear) {
    return 2019 - birthYear;
}

var ageJohn = calculAge(1927);
var ageMike = calculAge(1984);
var ageJane = calculAge(1993);

console.log(ageJohn, ageMike, ageJane);

function yearsToRetire(year, firstName) {
    var age = calculAge(year);
    var retirem = 65 - age;
    console.log(firstName + ' retires in ' + retirem + ' years');
}

yearsToRetire(1988, 'Daniel');