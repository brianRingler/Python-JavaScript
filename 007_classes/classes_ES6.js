// JavaScript ES6 Classes 
class Car {
    constructor(model, salePrice, color, yearBuilt){
        this.model = model;
        this.salePrice = salePrice;
        this.color = color;
        this.yearBuilt = yearBuilt
    }
    getYears(){ 
        const today = new Date();
        const carAge = today.getFullYear() - this.yearBuilt;
        return carAge;
    }
}

//Create Objects
const carOne = new Car('Charger',25000,'yellow',2010);
const carTwo = new Car('Rustang',22000,'blue',1998);

//Log out objects properties and methods
console.log(carOne.model);  // "Charger"
console.log(carTwo.model); // "Rustang"
console.log(carOne.color);  // "yellow"
console.log(carTwo.salePrice); // "22000"
console.log(carOne.getYears()); // 10
console.log(carTwo.getYears()); // 22