

class vehicle {

    constructor(company){
        this.company=company;
    }

     brand(){

        return "i have a "+this.company+" brand's car ";
    }
}

class Car extends vehicle{
    constructor(company,model)
    {
        super(company)
        this.model=model;

    }

        printMe(){
            return this.brand() +"and model "+ this.model
        }
}

const car1=new Car("BMW","360D");

console.log(car1.printMe());
