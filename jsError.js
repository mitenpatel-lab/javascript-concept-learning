try {
  let data = risky();
  console.log(data);
} catch (error) {
  console.error("Something is wrong:", error.message);
}


// using throw 

function getUserByName(name)
{

    if(typeof name != "string"){
            throw new Error("Name  must String");
            
    }
    console.log(name);
}

try {
    
    getUserByName(23)
} catch (error) {
    console.error(error.message);
}