class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment {
    constructor() {
        this.residents = [];
    }

    addResident(person) {
        this.residents.push(person);
    }
}

class House {
    constructor(maxApartments) {
        this.apartments = [];
        this.maxApartments = maxApartments;
    }

    addApartment(apartment) {
        if (this.apartments.length < this.maxApartments) {
            this.apartments.push(apartment);
        } else {
            console.log("Максимальна кількість квартир у будинку вже досягнута.");
        }
    }
}

const person1 = new Person("Lucy", "woman");
const person2 = new Person("Jon", "man");
const person3 = new Person("Mike", "woman");

const apartmentNomber1 = new Apartment();
const apartmentNomber2 = new Apartment();
const apartmentNomber3 = new Apartment();

apartmentNomber1.addResident(person1);
apartmentNomber2.addResident(person2);
apartmentNomber3.addResident(person3);

const house = new House(3); 

house.addApartment(apartmentNomber1);
house.addApartment(apartmentNomber2);
house.addApartment(apartmentNomber3); 
