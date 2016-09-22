import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId : module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
    //template : '<h1></h1>'
})
export class AppComponent {
    title : string;
    ages : number[] = [19,60,20,56,123, 1, 12];
    cssTrick : any = {trickClass : true};
    name : string = 'Vasko';
    users:any[] = [
            {id : 11, name : 'Pavle', age : 31, price : 12345.33, startOn : new Date()},
            {id : 22, name : 'Stojko', age : 31, price : 12345.33, startOn : new Date()},
            {id : 33, name : 'Mitra', age : 31, price : 12345.33, startOn : new Date()},
            {id : 44, name : 'Cveta', age : 31, price : 12345.33, startOn : new Date()}
        ];

    constructor() {
        this.title = "Our first app1";
    }

    onClickMe() {
        console.log('click me was pressed ' + new Date());
    }
 }

import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
@Pipe({name: 'addExtraText'})
export class AddExtraTextPipe implements PipeTransform {
  transform(value: any, args: any): any {
    return value;
  }
}

@Pipe({name: 'printStars'})
export class PrintStars implements PipeTransform {
  transform(value: number, args: any): any {
    var stars = '';
    
    for (var i = 0; i < value; i++) {
        stars += '*';        
    }

    return stars;
  }
}

@Pipe({name: 'someFilter'})
export class SomeFilterPipe implements PipeTransform {
  transform(value: number[], args: any): any {
        return value.filter(item => item > 18);
  }
}


@Component({
    moduleId : module.id,
    selector: 'user',
    templateUrl: 'user.component.html'
    //template : '<h1></h1>'
})
export class UserComponent implements OnInit {
    @Input()
    user : any = {id : 1, name : 'test'}

    constructor() {
        
    }

    ngOnInit() {
        console.log('Init from userComponent:', this.user.name)
     }
 }