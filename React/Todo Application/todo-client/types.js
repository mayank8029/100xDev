const zod = require('zod')

const createTodo =  zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    id: zod.string()
})

const signupZod = zod.object({
     name: zod.string(),
     email:zod.string().email(),
     password:zod.string()

})

const signinZod = zod.object({
    email:zod.string().email(),
    password:zod.string()
})


module.exports={
    createTodo:createTodo , 
    updateTodo:updateTodo,
    signinZod:signinZod,
    signupZod:signupZod
}



/*
    {
        title: string , 
        description: string 
    }

    {  for the todo which we have to mark them as completer
        id: string ,
    }
*/