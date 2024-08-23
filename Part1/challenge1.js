// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
var MarkWeight1 = 78;
var MarkHeight1 = 1.69;

var JohnWeight1 = 92;
var JohnHeight1 = 1.95;

var MarkBMI1 = MarkWeight1 / (MarkHeight1 * MarkHeight1);
var JohnBMI1 = JohnWeight1 / (JohnHeight1 * JohnHeight1);

var MarkHigherBMI1 = MarkBMI1 > JohnBMI1;

console.log("Data1 Mark's BMI:",MarkBMI1);
console.log("Data1 John's BMI:", JohnBMI1);
console.log("Data1 Is Mark's BMI higher than John's BMI?", MarkHigherBMI1);


var MarkWeight2 = 95;
var MarkHeight2 = 1.88;

var JohnWeight2 = 85;
var JohnHeight2 = 1.76;

var MarkBMI2 = MarkWeight2 / (MarkHeight2 * MarkHeight2);
var JohnBMI2 = JohnWeight2 / (JohnHeight2 * JohnHeight2);

var MarkHigherBMI2 = MarkBMI2 > JohnBMI2;

console.log("Data2 Mark's BMI:", MarkBMI2);
console.log("Data2 John's BMI:", JohnBMI2);
console.log("Data2 Is Mark's BMI higher than John's BMI?", MarkHigherBMI2);