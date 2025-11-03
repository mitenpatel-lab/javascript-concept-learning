//Using Object.create
const user={

    name:"miten",
    age:25,
    show(){
        console.log(`Hi my name is ${this.name}`)
    }
}

const user1=Object.create(user);
user1.city="Ahmedabad";

console.log(user1.city);


//Using prototype keyword

function userName(username){
this.username=username;
}

userName.prototype.show=function(){
            console.log(`Hi my UserName is ${this.username}`)

}

const username1=new userName("hey");
username1.show();


//using class

class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hi,my name is ${this.name}`);
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is Sleeping.`);
  }
}

const miten = new Student("miten");
miten.sayHello();
miten.study(); 