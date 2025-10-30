let firstName= "Miten";
let lastName= "Patel";

const fullName=function(){
    return firstName + " " + lastName;
    
}
console.log(fullName());

//Arrays

let numbers=[67,90,23,12,9,56,89];

//use of for loop

for (let i=0;i<=number.length-1;i++){
    number[i]%2==0?console.log(number[i] +"is even "):console.log(number[i] +"is odd ") 
}


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




