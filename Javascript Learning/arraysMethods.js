
//use of call()
const person={
    fullname:function(city){
      return  this.first + " "+this.last + " is living in "+city;
    }
}

const user={first:"miten", last:"Patel"};

console.log(person.fullname.call(user,"Ahmedabad"));


//use of apply


const person1={
    fullname:function(city){
      return  this.first + " "+this.last + " is living in "+city;
    }
}

const user1={first:"miten", last:"Patel"};

console.log(person1.fullname.apply(user1,["Ahmedabad"]));

//use of bind

const person2={
    fullname:function(city){
      return  this.first + " "+this.last + " is living in "+city;
    }
}

const user2={first:"miten", last:"Patel"};

const details= person2.fullname.bind(user2);

console.log(details("ahmedabad"));


