let firstName= "Miten";
let lastName= "Patel";

const fullName=function(){
    return firstName + " " + lastName;
    
}
console.log(fullName());

//Arrays

let numbers=[67,90,23,12,9,56,89]

console.log(numbers.length)

numbers.length>6?console.log("array elements are greater than 6")
                :console.log("array elements are less than 6")

numbers.forEach((num)=>{
    console.log(num);
});
