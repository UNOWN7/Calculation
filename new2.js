const express = require('express');
const app = express();
const PORT = 3000;

const { isStrongPassword } =require('validator')
app.use(express.json());

app.get('/password',(req,res)=>{
    const em = req.body.email; 
    if(isStrongPassword(em)){
        res.json(em + "Password is Strong")
    }else{
        res.status(400).send("Write strong password")
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
