// Lesson 19 - Functions Statement and Expressions

//Function Declaration
/*
function whaDoYouGo(job, fName) {
    
}
*/

//Funct Expression
var whatDoYouDo = function(job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches stuff...';           
            break;
        case 'driver':
                return firstName + ' drives stuff...';           
                break;
        case 'designer':
                return firstName + ' designs stuff...';           
                break;   
        default:
            return firstName + ' is a junkie.';
            break;
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('driver', 'Carl'));
console.log(whatDoYouDo('designer', 'Mike'));
console.log(whatDoYouDo('retired', 'Andrew'));