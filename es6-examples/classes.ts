class Animal {
    constructor(public name:string) {  }

    makeNoise() {
        console.log("making noise...");
    }

    square = x => x * x;

    static cube = x => x * x * x;
}

class Dog extends Animal {
    constructor(public name:string, public breed: string) { 
        super(name);
    }
}