// Coding Challenge 04

// Making a person constructor
function personator(name, weight, height) {
    return {
        name: name,
        weight: weight,
        height: height,
        bmi: 0,
        //Also would be possible to only return the BMI and doesn't store a value
        calcBMI: function(){
            this.bmi = this.weight / (this.height * this.height)
        }
    }
}

//Compares two persons and print result
function comparator(person1, person2) {
    switch (true) {
        case person1.bmi > person2.bmi:
            console.log(person1.name + '\'s BMI is greater than ' + person2.name + '\'s');
            break;
        case person1.bmi < person2.bmi:
            console.log(person2.name + '\'s BMI is greater than ' + person1.name + '\'s');
            break;
        default:
                console.log(person2.name + '\'s BMI is the same of ' + person1.name + '\'s');
            break;
    }
}

//Creates a person
var daniel = personator('Daniel',75,1.74);
daniel.calcBMI();
console.log(daniel);

//Creates another person
var smith = personator('Smith',75,1.74);
smith.calcBMI();
console.log(smith);

//Compare them
comparator(daniel, smith);