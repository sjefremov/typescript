class Person1 {
    firstName : string;
    lastName : string;
    gender : Gender;
}

enum Gender {
    Male,
    Female
}

let stole = new Person1();
stole.firstName = "Stojancho";
stole.lastName = "Jefremov";
stole.gender = Gender.Male;
console.log(stole);

function displayBigText(text : string | string[]) {

    let result : string;

    if (typeof text === "string") {
        result = text.toUpperCase();
    } else {
        result = text.map(i => i.toUpperCase()).join(",");
    }

    console.log(result);
}

displayBigText("Stojancho");
displayBigText(["Stojancho", "Jefremov"]);

// var element = document.createElement('input');
// element. look at the intellisense

type WorldSides = "West" | "East" | "North" | "South";
let direction : WorldSides; //direction can accept only these values similar as enum