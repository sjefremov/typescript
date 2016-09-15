function demo(p1, p2, p3 : any = "Default", p4?, p5 = 5) {
    console.log(p1);
    console.log(p2);
    console.log(p3);
    console.log(p4);
    console.log(p5);
}

demo(1, 2);
//demo();

function spread(separator:string, ...values) {//as params in c#
    return values.map(v => v.toString()).join(separator);
}