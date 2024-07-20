
function example(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("The promise is resolved")
        },5000)
    })
}

example().then((result)=>console.log(result))

console.log("Continued")