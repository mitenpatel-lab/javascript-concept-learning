const person={
    name:"miten",
    age:26,
    city:"Ahmedabad"
}


//accessing object property
console.log(person.age);


//create a object with new keyword


const vehicle=new Object({

    company:"toyota",
    year : 2015,
    model: "rav4",
    fulldetail: function(){
        return console.log("company : "+this.company+" year "+this.year+"model "+this.model);
    }
});
vehicle.fulldetail();


