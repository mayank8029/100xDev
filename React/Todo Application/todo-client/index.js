const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const jwt = require('jsonwebtoken')
const {todo , user} = require('./db.js')
const { createTodo , updateTodo , signinZod , signupZod } =require('./types.js') 
app.use(cors())
app.use(express.json())

app.post('/signup' , async (req , res)=>{
  const signupDetail = req.body ; 
  const check = signupZod.safeParse(signupDetail);

  if(!check.success){
    res.status(411).json({
      msg:'values are not correct'
    })
    return ; 
  }

  await user.create({
    name:signupDetail.name,
    email:signupDetail.email,
    password:signupDetail.password
  })

  res.json({
    msg:"user created succesfully"
  })

  

  
 
})

app.post('/todos' , async (req, res)=>{
    // check weather the values that we get are correct or not 
    const values = req.body ; 
    const check = createTodo.safeParse(values)
    if(!check.success){
      res.status(411).json({
        msg:"You sent a wrong input"
      })
      return ; 
    }

    await todo.create({
         title: values.title,
         description:values.description
    })

    res.json({
      msg: "your todo has been added"
    })

    // we have to operate on mongodb
})

app.get('/signin' ,async (req, res)=>{

  const signinInfo = req.body; 
  const check = signinZod.safeParse(signinInfo);

  if(!check.success){
    res.status(411).json({
      msg:"values not correct"
    })
  }



  const requser = await user.findOne({
     email:signinInfo.email
  })

  console.log(requser)
  const email = requser.mail ; 
  const password = requser.password ; 
  const token = jwt.sign({email , password} , "mayank")

 res.json(token)
 
})

app.get('/todo'  ,async (req, res) => {

  const data = await todo.find({})

  res.json({
    data
  })
   
})

app.put('/completed' , async function(req , res){
  // check weather the values that we get are correct or not 
  const updateval = req.body ; 
  const check = updateTodo.safeParse(updateval)
  if(!check.success){
    res.status(411).json({
      msg:"values are incorrect"
    })
    return ; 
  }

await todo.update({
     _id: req.body.id 
},{
  completed:true
})

res.json({
  msg:"todo marked as completed"
})

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})