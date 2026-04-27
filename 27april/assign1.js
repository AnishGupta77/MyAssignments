function fetchDataFromDatabase()
{
    return new Promise((resolve, reject)=>{

        const data = false;
        setTimeout(()=>
    {
        if (data)
        {
            resolve("Data fetched successfully");
        }else{
            reject("Data fetch unsuccessful");
        }
    },3000);
       
})
}fetchDataFromDatabase().then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
})