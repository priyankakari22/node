var express=require('express');
var app=express();

var bodyParser=require("body-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

var students=[
    {
       "name":"priya",
       "class":"5th",
       "rollNumber":44,
    },
    {
        "name":"asha",
       "class":"4th",
       "rollNumber":24,
    },
    {
        "name":"reema",
       "class":"6th",
       "rollNumber":41,
    }
]

app.use(express.static("public"))

app.get("/",function(req,res){
    res.send("Hello World")
})

//Get all books
app.get("/api/students",(req,res)=>{
    res.send(students)
})

app.post("/api/students",(req,res)=>{
    var newStudent=req.body;
    students.push(newStudent);
    res.send(students);
})

app.put("/api/students/:id",(req,res)=>{
    var id=req.params.id;
    var studentToBeupdated=students.filter((student)=>{
        return student.rollNumber==id
    })
    studentToBeupdated[0].name=req.body.name;
    res.send(studentToBeupdated)
})

app.delete("/api/students/:id",(req,res)=>{
    var id=req.params.id;

    var latestStudents=students.filter((student)=>{
        return student.rollNumber!=id
    })

    res.send(latestStudents)
})

app.listen(8000,function(){
    console.log("Server is started")
})