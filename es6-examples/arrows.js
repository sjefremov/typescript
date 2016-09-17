var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var evenSquares = 
//     numbers.filter(function (item) { return item % 2 == 0; })
//             .map(function (item) { return item * item; });
var evenSquares = numbers.filter(function (item) { return item % 2 == 0; })
    .map(function (item) { return item * item; });
function Person(age) {
    var _this = this;
    this.age = age;
    this.growOld = function () {
        console.log(_this);
        _this.age++;
    };
}
