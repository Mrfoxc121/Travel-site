// Constructor function

// function Person(fullName, faveColor) {
//     this.name = fullName;
//     this.favoriteColor = faveColor;
//     this.greet = function() {
//         console.log(`Hello my name is ${this.name} and my favorite colour is ${this.favoriteColor}`);
//     }
// }

class Person {
    constructor(name, favoriteColor) {
        this.name = name;
        this.favoriteColor = favoriteColor;
    }
    greet() {
        console.log(`Hello my name is ${this.name} and my favorite colour is ${this.favoriteColor}`);
    }
}

export default Person