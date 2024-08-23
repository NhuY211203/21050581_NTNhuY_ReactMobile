var MarkWeight1 = 78;
var MarkHeight1 = 1.69;

var JohnWeight1 = 92;
var JohnHeight1 = 1.95;

var MarkBMI1 = MarkWeight1 / (MarkHeight1 * MarkHeight1);
var JohnBMI1 = JohnWeight1 / (JohnHeight1 * JohnHeight1);

var MarkHigherBMI1 = MarkBMI1 > JohnBMI1;

console.log("Data1 Mark's BMI:", MarkBMI1.toFixed(2));
console.log("Data1 John's BMI:", JohnBMI1.toFixed(2));

if (MarkHigherBMI1) {
    console.log(`Mark's BMI (${MarkBMI1.toFixed(2)}) is higher than John's (${JohnBMI1.toFixed(2)})!`);
} else {
    console.log(`John's BMI (${JohnBMI1.toFixed(2)}) is higher than Mark's (${MarkBMI1.toFixed(2)})!`);
}

var MarkWeight2 = 95;
var MarkHeight2 = 1.88;

var JohnWeight2 = 85;
var JohnHeight2 = 1.76;

var MarkBMI2 = MarkWeight2 / (MarkHeight2 * MarkHeight2);
var JohnBMI2 = JohnWeight2 / (JohnHeight2 * JohnHeight2);

var MarkHigherBMI2 = MarkBMI2 > JohnBMI2;

console.log("\nData2 Mark's BMI:", MarkBMI2.toFixed(2));
console.log("Data2 John's BMI:", JohnBMI2.toFixed(2));

if (MarkHigherBMI2) {
    console.log(`Mark's BMI (${MarkBMI2.toFixed(2)}) is higher than John's (${JohnBMI2.toFixed(2)})!`);
} else {
    console.log(`John's BMI (${JohnBMI2.toFixed(2)}) is higher than Mark's (${MarkBMI2.toFixed(2)})!`);
}
