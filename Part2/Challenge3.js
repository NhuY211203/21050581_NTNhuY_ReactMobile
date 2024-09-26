const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.bmi = this.mass/this.height**2;
        return this.bmi;
    }
}

var john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        this.bmi = this.mass/this.height**2;
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName} có bmi là ${mark.bmi.toFixed(1)} cao hơn ${john.fullName} có bmi là ${john.bmi.toFixed(1)}`);
}else if (mark.bmi < john.bmi) {
    console.log(`${mark.fullName} có bmi là ${mark.bmi.toFixed(1)} nhỏ hơn ${john.fullName} có bmi là ${john.bmi.toFixed(1)}`);
}else{
    console.log(`${mark.fullName} có bmi là ${mark.bmi.toFixed(1)} bằng với ${john.fullName} có bmi là ${john.bmi.toFixed(1)}`);
}