var express=require('express');
var app=express();

var books=require("./routes/books")
var students=require("./routes/students")

var bodyParser=require("body-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static("public"))

app.get("/",function(req,res){
    res.send("Hello World")
})



app.use("/api/books",books)
app.use("/api/students",students)

app.listen(8000,function(){
    console.log("Server is started")
})