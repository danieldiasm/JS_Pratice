// Challenge 01
var markHeight, markWeight, johnHeight, johnWeight;

markHeight = 1.74 //m
markWeight = 75 //kg

johnHeight = 1.80 //m
johnWeight = 79 //kg

markBMI = markWeight / (markHeight * markHeight);
johnBMI = johnWeight / (markHeight * markHeight);

console.log('Mark\'s BMI: ' + Math.round(markBMI * 100)/100 + ' John\'s BMI: ' + Math.round(johnBMI * 100)/100)
console.log("Is Mark's BMI higher than John's? " + (markBMI > johnBMI));