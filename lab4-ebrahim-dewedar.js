// ........................Q 1................
function isTruthy(value){
    if (value){
        return true;
    }
    else{
        return false;
    }
}
// ........................Q 2................

class Vehicle{
    constructor(type,model,year){
        this.types=type;
        this.models=model;
        this.years=year;
    }
}
Vehicle.prototype.describe=function (){
    console.log(`the type is ${this.types} and model of ${this.models}`)
}

class Car extends Vehicle{
    constructor(type,model,year,brand){
        super(type,model,year);
        this.branding=brand;
    }
}
Car.prototype.honk=function (){
    console.log('..beeeeee ..tataraaaaataaa !!');
}

class ElectricCar extends Car{
    constructor(type,model,year,batteryRange){
        super(type,model,year);
        this.battery=batteryRange;
    }
}
ElectricCar.prototype.charge=function (){
    console.log(`${this.types} is charging`)
}

Vehicle.prototype.maxSpeed="180 km/hr"
const tesla= new ElectricCar("super car","tesla-6",2015,"72 hrs")

tesla.describe();
tesla.honk();
tesla.charge();

// level of charge
console.log(tesla.__proto__)
console.log(ElectricCar.prototype)
// level of honk
console.log(tesla.__proto__.__proto__)
console.log(ElectricCar.prototype.__proto__)
console.log(Car.prototype)
// level of describe
console.log(tesla.__proto__.__proto__.__proto__)
console.log(ElectricCar.prototype.__proto__.__proto__)
console.log(Car.prototype.__proto__)
console.log(Vehicle.prototype)
//	Access the maxSpeed prototype property
console.log(tesla.maxSpeed)

const arrs= new Array



console.log(isTruthy("0"))
console.log(+"42")