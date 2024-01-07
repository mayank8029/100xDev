/*
Todo{
    title: string 
    description: string 
    completed: boolean
}
*/


const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String , 
    description:String , 
    completed:Boolean
})

const userSchema = mongoose.Schema({
    name: String, 
    email:String , 
    password:String
})

const todo = mongoose.model('todo' , todoSchema)
const user = mongoose.model('user' , userSchema)
module.exports={
   todo, user
}