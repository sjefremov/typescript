// var person : {firstName : string, lastName : string} = {
//     firstName : "Stojancho",
//     lastName : "Jefremov"  
// };

// var person1 = {
//     firstName : "Zlatan",
//     lastName : "Ibrahimovic",
//     age : 0x23
// };

// var person2 = {
//     firstName : "Paul"
// };

// function getFullName(person: IPerson) {
//     return `${person.firstName} ${person.lastName}`;
// }

// console.log(getFullName(person));
// console.log(getFullName(person1));//similar to interfaces
// //console.log(getFullName(person2));//similar to interfaces

// interface IPerson {
//     firstName : string;
//     lastName : string;
//     //walk : () => string;
// }

// function test() {
//     if (true) {
//         let x = 3;
//     } else {
//         let x = {};
//     }
// }

// class Person {
//     // public firstName : string;
//     // public lastName : string;
//     public age = 0;
    
//     constructor(public firstName : string, public lastName : string) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
    
//     /**
//      * getFullName
//      */
//     public getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }