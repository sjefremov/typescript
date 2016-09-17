var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// var evenSquares = 
//     numbers.filter(function (item) { return item % 2 == 0; })
//             .map(function (item) { return item * item; });

var evenSquares = 
    numbers.filter(item => item % 2 == 0)
            .map(item => item * item);

function Person(age:number) {
    this.age = age;

    this.growOld = () => { //with the arrow syntax this will be always person object
        console.log(this);
        this.age++;
    }
}