class Person {
    constructor(name, lastName, age, height, gender, hairColor) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.height = height;
        this.gender = gender;
        this.hairColor = hairColor;
    }

    aboutMe() {
        console.log(`Hi, I am ${this.name} ${this.lastName},i am ${this.gender}, i am ${this.age} years old,
         my spike is ${this.height} centimeters, my hair color is ${this.hairColor}`);
    }
};

let person1 = new Person("Poxos", "Poxosyan", 33, 168, "male", "black");
person1.aboutMe();
let person2 = new Person("Petros", "Petrosyan", 26, 189, "male", "yellow");
person2.aboutMe();
let person3 = new Person("Anna", "Ananyan", 18, 156, "female", "brown");
person3.aboutMe();
