const fullname="Miten S Patel ";
const unformedfullname="Miten Patel \uD800";



//swap frist and last name

const breakName=fullname.split(" ");

const newName=breakName[2]+ " "+ breakName[0]+ " "+breakName[1];

console.log(newName);

console.log(fullname.length);

console.log(fullname.endsWith("patel"));
console.log(fullname.isWellFormed());
console.log(fullname.endsWith("patel"));

console.log(unformedfullname.toWellFormed());
console.log(fullname.slice(5));

console.log(fullname.toLowerCase().includes("patel"));
console.log(fullname.toUpperCase().includes("PATEL"));
console.log(fullname.replace("Patel","jay"));
console.log(fullname.valueOf());
console.log(fullname.split(" "));
console.log(fullname.trim());

console.log(fullname.toUpperCase());
console.log(fullname.toLowerCase());
