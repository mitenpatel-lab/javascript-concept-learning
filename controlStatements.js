let number=70;
let number2=75;
let number3=60;


// simple if-else statement 

if(number>number2){
    console.log(number +" is greater than" + number2);
}else{
        console.log(number +" is less than" + number2);

}

//nested if-else statement

if(number>number2 && number>number3){
    console.log(number +" is Larger than "+number2 +" and " + number3);
    
}else if(number2>number && number>number3){
    console.log(number2 +" is Larger than "+number +" and " + number3);
}else{
        console.log(number3 +" is Larger than "+number +" and " + number2);

}