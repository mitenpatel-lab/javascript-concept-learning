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
