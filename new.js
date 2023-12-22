const express = require('express');

const app = express();
const PORT = 3000;
app.use(express.json())
app.get('/getName',(req,res)=>{
        let { numb1 , numb2 , operator } = req.body;
        const num1 = parseFloat(numb1);
        const num2 = parseFloat(numb2);

        let result;
        if(isNaN(num1) || isNaN(num2) ){
            return res.status(400).send('Invalid Input');
        }else{
                if(operator==='add'){
                    result=num1 + num2;
                    
                }else if(operator==='sub'){
                    result=num1-num2;
                    
                }else if(operator==="multiply"){
                    result=num1*num2;
                    
                }else if(operator==="divide"){
                    if(num2==0){
                    res.send("Number can't divide by zero")
                    }else{
                        result=num1/num2;
                        
                    }
                }
            res.json("Result : " + result );
    };
    
    });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
