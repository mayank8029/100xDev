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

    app.get('/health-checkup' , function(req , res){
        const username = req.headers.username ; 
        const password = req.headers.password ; 
        const KidneyId = req.query.KidneyId ; 

        if(username!="mayank" || password!="pass"){
            res.status(400).json({"msg":"Soomethings up with your inputs"})
            return ; 
        } 
        
        if(username==="mayank"&& password ==="pass"){
            if(KidneyId==1 || KidneyId==2){
                res.status(200).json({"msg":"your kidney is fine"})
            }
            else{
                
                res.status(404).json({
                    msg:"you are not a human"
                })
            }
        }
        return ; 
        
    } )

    //Global catches 
    // so we have to define this before app.listen and after our all logic so whenever there is an exception it will going to throw error
    //error handeling middleware 
    // app.use means whenever there is thing this middleware always called 

    // if there are multiple functions call or middleware call and any of the function or middleware declares an error then no other middleware will be called and the function will directly throw the error using global catch 
    app.use(function(err , req , res , next){
        res.json({
            msg:"sorry something is wrong with our server"
        })
    })

    
    app.listen(port , ()=>{
        console.log(`example app is running at port ${port}`)
    })
   