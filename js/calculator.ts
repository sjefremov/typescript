function realCalc(first : number, second : number,
            operation : (a:number, b: number) => number) {
    return operation(first, second);
}

// realCalc(1, 2, function (x, y) { return x + y; } );
// realCalc(1, 2,  (x, y) =>  x + y );//ts accepts lambda syntax
// realCalc("1", 2, function (x, y) { return x + y; } );//it will warn us but will produce compiled js file

var operators : {[key : string] : (x:number, y:number) => number} =
{
    '+' : (x : number, y : number) => x + y,
    '-' : (x : number, y : number) => x - y,
    '*' : (x : number, y : number) => x * y,
    '/' : (x : number, y : number) => x / y  
};

function calculate() {
    var firstInput = <HTMLInputElement>document.getElementById('first');//casting
    var first = firstInput.valueAsNumber;
    
    var secondInput = <HTMLInputElement>document.getElementById('second');//casting
    var second = secondInput.valueAsNumber;
    
    var operatorInput = <HTMLSelectElement>document.getElementById('operator');//casting
    var selectedOperator = operators[operatorInput.value];
    
    var result = realCalc(first, second, selectedOperator);
    
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = result.toString();
    
    // alert(first);
    // alert(second);
}

