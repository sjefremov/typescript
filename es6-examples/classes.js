var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal(name) {
        this.name = name;
        this.square = function (x) { return x * x; };
    }
    Animal.prototype.makeNoise = function () {
        console.log("making noise...");
    };
    Animal.cube = function (x) { return x * x * x; };
    return Animal;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(name, breed) {
        _super.call(this, name);
        this.name = name;
        this.breed = breed;
    }
    return Dog;
}(Animal));
