    //Async and await

    async function fetchdata(api){

        try{
                const response=await fetch(api);

                if(!response){
                        throw new Error("there is a network issue");
                }

                const data=await response.json();
                    console.log("Data received:", data);

                    data.forEach((datas)=>{
                      console.log(datas.id + "  "+ datas.title)
                    })

        }catch(error){
                console.error("There was an error:", error);

        }

    }

    fetchdata("https://jsonplaceholder.typicode.com/posts");