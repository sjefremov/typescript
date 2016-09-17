var rect = { x: 0, y: 0, width: 15, height: 20 };
var x = rect.x, y = rect.y, height = rect.height;
console.log(x);
console.log(y);
console.log(height);
var array = [1, 2, 3, 4];
// let first = array[0];
// let others = array.slice(1);
// let [first, ...others] = array;
// console.log(first);
// console.log(others);
for (var item in array) {
    console.log(array[item]);
}
