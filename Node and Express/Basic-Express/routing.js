app.get('/' , (req , res)=>{
    res.send('Hello world')
})

app.post('/' , (req , res)=>{
    res.send('got a post request')
})

app.put('/user' , ()=>{
    res.send('get a put request')
})

app.delete('/user' , (req , res)=>{
    res.send('get a delete request')
})