// Prototype is a built-in object in JavaScript that allows you to add properties and methods to an object.

// let obj = {
//     a: 1,
//     b: "Harry"
// }

// console.log(obj)

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal
 
class Animal{                                 //class is a blueprint for creating objects
    constructor(name){                         // constructor is a special method that is called when an object is created
        this.name = name                       // this keyword refers to the current object
        console.log("Object is created...")
    }

    eats(){                               // method of Animal class
        console.log("Kha raha hoon")
    }
    jumps(){
        console.log("Kood raha hoon")
    }
}


class Lion extends Animal {             //Inheritance in JavaScript, Lion is a subclass of Animal
    constructor(name){
        super(name)                    // calls the constructor of the parent class Animal
        console.log("Object is created and he is a lion...")
    }

    eats(){                            //overriding the eats method of Animal class
        super.eats()                           // calls the eats method of Animal class
        console.log("Kha raha hoon roar")
    }
}

let a = new Animal("Bunny");         // object of Animal class is created
console.log(a)
a.eats()

let l = new Lion("Shera")           //object of Lion class is created
console.log(l)
l.eats()

console.log("------------------------")

l.jumps()
a.jumps()