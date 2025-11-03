
//////// Array Methods 

let cars=["BMW","Audi","Skoda"];
cars.push("Mercedes")
console.log(cars)

cars.pop()

console.log(cars)


let number=[56,89,9,78,90];

number[number.length]=12;
console.log(cars.filter(car=>car.length>4));


console.log(number.find((value) => {
    return value >50
}))


console.log(number.toSorted(function(a, c){return a -c}))
 
//use of map 

console.log(number.map((num=> num *2)))

//use of concat method 

console.log(number.concat(cars))

//use of toString method 

console.log(number.toString())

//use of copyWithin method 

console.log(number.copyWithin(0,4))

//use of at method 

console.log(number.at(2))

//use of join method 

console.log(number.join(" = "))

//use of shift method 

console.log(number.shift() + number.map((key,value)=>{
    console.log("Key ="+ key + "Value = " + value);
}))

//use of unshift method 

console.log(number.unshift("100") + number.map((key,value)=>{
    console.log("Key ="+ key + "Value = " + value);
}))


//
const multiDimension=[[5,3],[4,0],[67,98]];

console.log(multiDimension.flat());


const posts=[{
    "author":"Miten",
    id:1,
    post:[{
        postid:1,
        post:"hello",
        category:"regular"
    },{
        postid:2,
        post:"hi",
        category:"regular"
    }]
},{
    "author":"jay",
    id:1,
    post:[{
        postid:4,
        post:"h",
        category:"rare"
    }]
}];

const allPost=posts.flatMap(user=>user.post.map(p=>({
    author:user.author,
    id:user.id,
    ...p
})));


let users=["miten","jay","arun"];

let user=users.slice(2);
console.log(user)


