var Person1 = (function () {
    function Person1() {
    }
    return Person1;
}());
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var stole = new Person1();
stole.firstName = "Stojancho";
stole.lastName = "Jefremov";
stole.gender = Gender.Male;
console.log(stole);
function displayBigText(text) {
    var result;
    if (typeof text === "string") {
        result = text.toUpperCase();
    }
    else {
        result = text.map(function (i) { return i.toUpperCase(); }).join(",");
    }
    console.log(result);
}
displayBigText("Stojancho");
displayBigText(["Stojancho", "Jefremov"]);
