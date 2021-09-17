const fs = require("fs")

fs.writeFile("tow.txt", "This is 'writeFile system' file.", function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("file create successfull")
    }
})

// use arrow function 
fs.appendFile("tow.txt", " My name is: Borhan uddin mishkat ", (err)=> {
    if (err) {
        console.log(err)
    }
    else {
        console.log("file create successfull")
    }
})

// read file
fs.readFile("tow.txt", "utf-8", (err, data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }

})

// rename file
fs.rename("tow.txt", "document.txt",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("rename success")
    }
})

fs.writeFile("demo.txt","this is delete file", (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("CR success")
    }
})

// delete file
 fs.unlink("demo.txt",(err)=>{
     if(err){
         console.log(err)
     }
     else{
         console.log("delete success")
     }
 })