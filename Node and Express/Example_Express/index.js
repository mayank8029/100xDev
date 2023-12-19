// Assignment to do after this 

// create a todo app that lets users store todos on the file
// try to creat a http server from scratch in c 


const express = require("express")
// console.log(express)

const app = express() ; 
const port = 3000 ; 
// fs.readFile('path' , "utf-8" , ()=>{
    //     console.log("we read the file")
    // })
    // the main purpose of fs(filesystem) is to read and write file  
    app.get('/' , (req , res)=>{
        // req has headers , body , query parameters 
        res.send("hello world")
    })
    
    app.listen(port , ()=>{
        console.log(`example app is running at port ${port}`)
    })
   