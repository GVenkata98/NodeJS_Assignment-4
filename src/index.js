const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.set('views' , './views');
app.set('view engine' , 'ejs');

app.get("/" , (req , res)=> {
    res.send("Hello World")
} )

app.get("/form" , (req, res) =>{
    res.render("form.ejs");
})

app.post("/add" , (req, res) =>{
    console.log(req.body);
    if(req.body.num1 < -1000000 || req.body.num2 < -1000000 || (req.body.num1+req.body.num2) < -1000000){
        res.send({
            status: "error" ,
            message: "Underflow"
        })
    }
    else if(req.body.num1 > 1000000 || req.body.num2 > 1000000 || (req.body.num1+req.body.num2) > 1000000){
        res.send({
            status: "error" ,
            message: "Overflow"
        })
    }
    else if(isNaN(req.body.num1) || isNaN(req.body.num2)){
        res.send({
            status: "error" ,
            message: "Invalid data type"        
        })
    }
    else{
        res.status(200).send({
            status: "success" ,
            message: "the sum of given two numbers" ,
            sum: Number(req.body.num1) + Number(req.body.num2)
        })    
    }
})

app.post("/sub" , (req, res) =>{
    console.log(req.body);
    if(req.body.num1 < -1000000 || req.body.num2 < -1000000 || (req.body.num1-req.body.num2) < -1000000){
        res.send({
            status: "error" ,
            message: "Underflow"
        })
    }
    else if(req.body.num1 > 1000000 || req.body.num2 > 1000000 || (req.body.num1-req.body.num2) > 1000000){
        res.send({
            status: "error" ,
            message: "Overflow"
        })
    }
    else if(isNaN(req.body.num1) || isNaN(req.body.num2)){
        res.send({
            status: "error" ,
            message: "Invalid data type"        
        })
    }
    else{
        res.status(200).send({
            status: "success" ,
            message: "the sum of given two numbers",
            difference: Number(req.body.num1) - Number(req.body.num2)
        })    
    }
})

app.post("/multiply" , (req, res) =>{
    console.log(req.body);
    if(req.body.num1 < -1000000 || req.body.num2 < -1000000 || (req.body.num1*req.body.num2) < -1000000){
        res.send({
            status: "error" ,
            message: "Underflow"
        })
    }
    else if(req.body.num1 > 1000000 || req.body.num2 > 1000000 || (req.body.num1*req.body.num2) > 1000000){
        res.send({
            status: "error" ,
            message: "Overflow"
        })
    }
    else if(isNaN(req.body.num1) || isNaN(req.body.num2)){
        res.send({
            status: "error" ,
            message: "Invalid data type"        
        })
    }
    else{
        res.status(200).send({
            status: "success" ,
            message: "the sum of given two numbers",
            result: Number(req.body.num1) * Number(req.body.num2)
        })    
    }
})

app.post("/divide" , (req, res) =>{
    console.log(req.body);
    if(req.body.num2 == 0){
        res.send({
            status: "error" ,
            message: "cannot divide by zero"
        })
    }
    else if(req.body.num1 < -1000000 || req.body.num2 < -1000000 || (req.body.num1/req.body.num2) < -1000000){
        res.send({
            status: "error" ,
            message: "Underflow"
        })
    }
    else if(req.body.num1 > 1000000 || req.body.num2 > 1000000 || (req.body.num1/req.body.num2) > 1000000){
        res.send({
            status: "error" ,
            message: "Overflow"
        })
    }
    else if(isNaN(req.body.num1) || isNaN(req.body.num2)){
        res.send({
            status: "error" ,
            message: "Invalid data type"        
        })
    }
    else{
        res.status(200).send({
            status: "success" ,
            message: "the sum of given two numbers",
            result: Number(req.body.num1) / Number(req.body.num2)
        })    
    }
})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;