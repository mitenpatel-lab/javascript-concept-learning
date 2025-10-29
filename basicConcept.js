let firstName= "Miten";
let lastName= "Patel";

const fullName=function(){
    return firstName + " " + lastName;
    
}
console.log(fullName());

//Arrays

let numbers=[67,90,23,12,9,56,89];

console.log(numbers.length)

numbers.length>6?console.log("array elements are greater than 6")
                :console.log("array elements are less than 6")

numbers.forEach((num)=>{
    console.log(num);
});

//closure
function harry(){

    let firstName="Jay";

    function potter(){
        console.log(firstName)
    }

    return potter

}

const name=harry();
name();

//destructuring obj

const person={
    name:"Miten",
    surname:"Patel",
    age:25,
    city:"Ahmedabad"
}

let {age,...otherDetails}=person;

console.log(age);;
console.log(otherDetails);


//setTimeOut
console.log("Start");

setTimeout(() => {
  console.log("Execute after 3 sec");
}, 3000);

console.log("End");

//////// Array Methods 

let cars=["BMW","Audi","Skoda"];
cars.push("Mercedes")
console.log(cars)

cars.pop()

console.log(cars)


let number=[56,89,9,78,90];
console.log(cars.filter(car=>car.length>4));
console.log(number.find((value) => {
    return value >50
}))
console.log(number.toSorted(function(a, c){return a -c}))
console.log(number)

console.log(number.map((num=> num *2)))


