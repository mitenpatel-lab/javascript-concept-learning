
//for loop


let numbers=[67,90,23,12,9,56,89];

//use of for loop

for (let i=0;i<=number.length-1;i++){
    number[i]%2==0?console.log(number[i] +"is even "):console.log(number[i] +"is odd ") 
}



let i= 0;
//use of while loop
while( i<=number.length-1){
    number[i]%2==0?console.log(number[i] +" is even "):console.log(number[i] +" is odd ") 
    i++;
}

//use of do while loop

do{
      number[i]%2==0?console.log(number[i] +" is even "):console.log(number[i] +" is odd ") 
    i++;
}while(i<=number.length-1)