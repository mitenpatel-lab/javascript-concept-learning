
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