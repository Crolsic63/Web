// let date = new Date();
// console.log(date.getMonth()+1);
// let arr = [1,3,4,1,0,-2,3,5,-10];
// let stroka = arr.sort().join(', ');
// console.log(stroka.split(', '));

class Car{
    constructor(engine, color, model){
        this.engine = engine;
        this.color = color;
        this.model = model;
    }

    info(){
        console.log(this.engine, this.color, this.model);
    }
}

let car_1 = new Car(1.8, 'white', 'Honda');
let car_2 = new Car(3, 'black', 'BMW');

car_1.info();
car_2.info();
