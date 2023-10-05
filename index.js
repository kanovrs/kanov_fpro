class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInfo() {
        console.log(`Ім'я:${this.name} Вік:${this.age}`)
    }
}

class Car {
    constructor(brand, model, year, number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.number = number;
    }

    setOwner(owner) {
        if (owner.age < 18) {
            this.owner = owner;
        } else {
            console.log("Власник автомобіля повинен бути старше 18 років.");
        }
    }

    printCarInfo() {
        console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}, Номерний знак: ${this.number}`);
        if (this.owner) {
            console.log("Інформація про власника:");
            this.owner.getInfo();
        }
    }

}

const person1 = new Person("Ann", 32);
const person2 = new Person("Jon", 16);

const car1 = new Car("Toyota", "Camry", 2022, "AD777RE");
const car2 = new Car("Mercedes", "clk-320", 2021, "KA044KA");

car1.setOwner(person1); 
car2.setOwner(person2);

car1.printCarInfo(); 
car2.printCarInfo();
