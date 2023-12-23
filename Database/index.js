const mongoose = require("mongoose")

mongoose.connect("url")

const User = mongoose.model('User',{
    name: String ,
    email: String , 
    password:String 

})

const user = new User({
    name: name , 
    email: email , 
    password: password
})

user.save()