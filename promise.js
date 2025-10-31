const promisee= new Promise((resolve,reject)=>{

    let success=true;

    if(success){
        resolve("operation resolved");
    }else{
        reject("operation rejected");
    }
});

promisee
.then((result)=>{
    console.log(result)
})
.catch((error) => {
    console.log(error);  
  });

  //with setTimeOut

  const handlePromise=new Promise((resolve,reject)=>{

    setTimeout(()=>{
        let success=true;

        if (success) {
        resolve("Data received!");
      } else {
        reject("Error fetching data");
      }
    },2000);
    
  });

  handlePromise
    .then((data)=>{
            console.log(data)
    })
    .catch((error)=>{
            console.log(error)

    });

