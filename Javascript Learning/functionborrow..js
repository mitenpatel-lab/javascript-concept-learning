const person={
    fullname:function(first,last){
        first + " "+last + " is living in "+this.city;
    }
}

const user={city:"ahmedabad"};

console.log(person.fullname.call(user,"miten","patel"));