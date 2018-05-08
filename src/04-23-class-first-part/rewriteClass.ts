/**
 * 3개의 클래스를 100% TS 클래스로 다시 작성해주세요
 */

// Exercise 1 - Class
// function Car(){
class Car {
    public acceleration:number;
    public name:string;
    constructor(){
        this.acceleration=0;
        this.name = '';
    }

    accelerate = (speed:number) => this.acceleration += speed;
    honk = () => "빵빵!";
    // this.name = name;
    // this.acceleration = 0;

    // this.honk = function() {
    //     return "빵빵!";
    // };

    // this.accelerate = function(speed) {
    //     this.acceleration = this.acceleration + speed;
    // }
}

// Exercise 2 - Inheritance
// var baseObject = {
//     width: 0,
//     length: 0
// };

class baseObject{
    width:number=0;
    length:number=0;
}
class Rectangle extends baseObject{
    calcSize(){
        return this.width*this.length;
    }
}
// let Rectangle = Object.create(baseObject);

// Rectangle.calcSize = function() {
//     return this.width * this.length;
// };

// Exercise 3 - Getter & Setter
// var Person = {
//     _firstName: ""
// };

// Object.defineProperty(Person, "firstName", {
//     get: function () {
//         return this._firstName;
//     },
//     set: function (value) {
//         if (value.length >= 3) {
//             this._firstName = value;
//         }
//         else {
//             this._firstName = "";
//         }
//     },
//     enumerable: true,
//     configurable: true
// });

class person{ _firstName="" }
class Person extends person{
    get firstName():string{
        return this._firstName;
    }

    set firstName(newName:string){
        if(newName.length >=3){
            this._firstName = newName;
        }else{
            this._firstName = "";
        }
    }
        // enumerable: true,
        // configurable: true
}

export {
  Car,
  Rectangle,
  Person,
}