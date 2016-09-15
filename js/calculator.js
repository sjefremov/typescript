function realCalc(first, second, operation) {
    return operation(first, second);
}

// realCalc(1, 2, function (x, y) { return x + y; } );
// realCalc(1, 2,  (x, y) =>  x + y );//ts accepts lambda syntax
// realCalc("1", 2, function (x, y) { return x + y; } );//it will warn us but will produce compiled js file
var operators = {
    '+': function (x, y) {
        return x + y;
    },
    '-': function (x, y) {
        return x - y;
    },
    '*': function (x, y) {
        return x * y;
    },
    '/': function (x, y) {
        return x / y;
    }
};

function calculate() {
    var firstInput = document.getElementById('first');
    var first = firstInput.valueAsNumber;

    var secondInput = document.getElementById('second');
    var second = secondInput.valueAsNumber;

    var operatorInput = document.getElementById('operator');
    var selectedOperator = operators[operatorInput.value];

    var result = realCalc(first, second, selectedOperator);

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = result.toString();
    // alert(first);
    // alert(second);
}
