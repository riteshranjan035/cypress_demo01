class Car {
    constructor() {
        this.carname = 'Ford';
    }
    present() {
        return 'I have a ' + this.carname;
    }
}

class Model extends Car {
    constructor() {
        super()
        this.model = 'Mustang';
    }
    show() {
        return this.present() + ', it is a ' + this.model;
    }
}

let myCar = new Model();
console.log(myCar.show())