const express= require('express')
const app= express()
const port = 3000
app.get('/',(req, res)=>{
res.send('muchachos, me salió el get')
})

app.listen(port,()=>{
    console.log('efectivamente, el servidor esta corriendo')
})