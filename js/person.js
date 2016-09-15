var person = {
    firstName: "Stojancho",
    lastName: "Jefremov"
};
var person1 = {
    firstName: "Zlatan",
    lastName: "Ibrahimovic",
    age: 0x23
};
var person2 = {
    firstName: "Paul"
};
function getFullName(person) {
    return person.firstName + " " + person.lastName;
}
console.log(getFullName(person));
console.log(getFullName(person1)); //similar to interfaces
function test() {
    if (true) {
        var x = 3;
    }
    else {
        var x = {};
    }
}
var Person = (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        // public firstName : string;
        // public lastName : string;
        this.age = 0;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    /**
     * getFullName
     */
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
