const person={name: "miten"}

function greeting(){
    console.log("Hi Good morning "+this.name);
}

greeting.call(person);