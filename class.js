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
    genderBM() {
        if(this.gender == "male") {
            return "BOY";
        } else {
            return "GIRL";
        }
    }
    dataPrinting() {
        console.log(`Name - ${this.name}
Last Name - ${this.lastName}
Age - ${this.age}
Height - ${this.height}
Gender - ${this.gender}
Hair Color - ${this.hairColor}`);
    }
}

let person1 = new Person("Poxos", "Poxosyan", 33, 168, "male", "black");
person1.aboutMe();
console.log(person1.genderBM());
person1.dataPrinting();

let person2 = new Person("Petros", "Petrosyan", 26, 189, "male", "yellow");
person2.aboutMe();
console.log(person2.genderBM());
person2.dataPrinting();

let person3 = new Person("Anna", "Ananyan", 18, 156, "female", "brown");
person3.aboutMe();
console.log(person3.genderBM());
person3.dataPrinting();

let person4 = new Person("Gnchu", "Hovakimyan", 15, 190, "male", "black");
let person5 = new Person("Lil", "Lalayan", 13, 120, "female", "yellow");

let personArr = [];
personArr.push(person1, person2, person3, person4, person5);

for (let i = 0; i < personArr.length; i++) {
    alert(personArr[i].age);
};

function Delete() {
    for (let i = 0; i < personArr.length; i++) {
        if(personArr[i].age < 18) {
            personArr.splice(i, 1)
            i--;
        };
        
    };
};

Delete();

for (let i = 0; i < personArr.length; i++) {
    alert(personArr[i].age);
    
};

