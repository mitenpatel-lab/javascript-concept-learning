function sum(x,y){
    return x*y;
}

console.log(sum(5,9));


console.log("conflit")

let addition=function(a,b){
    
    return a+b;
}

console.log(addition(7,9))

//use of arrow function

const name=(name)=>{
    console.log("my name is "+name);
}

name("hello");


//closure

function detail(){

    let name="miten";

    function printme(){
        console.log("my  name is "+name);
    }

    return printme;
}


let printname=detail();
printname();

//