// Lesson 14 - If/Else Structure

var firstName = 'John';
var civilStatus = 'Single';

if (civilStatus === 'married'){
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried){
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

//Enhancing the challenge excercise #01
var markHeight, markWeight, johnHeight, johnWeight;

markHeight = 1.74 //m
markWeight = 75 //kg

johnHeight = 1.80 //m
johnWeight = 79 //kg

markBMI = markWeight / (markHeight * markHeight);
johnBMI = johnWeight / (markHeight * markHeight);

if (markBMI > johnBMI) {
    console.log('Mark\'s BMI is higher than John\'s');
} else {
    console.log('John\'s BMI is higher than Mark\'s');
}

//console.log('Mark\'s BMI: ' + Math.round(markBMI * 100)/100 + ' John\'s BMI: ' + Math.round(johnBMI * 100)/100)
//console.log("Is Mark's BMI higher than John's? " + (markBMI > johnBMI));

