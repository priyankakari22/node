var express=require('express')
var router=express.Router();

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

router.route("/")
    .get((req,res)=>{
        res.send(students)
    })
    .post((req,res)=>{
    	var newStudent=req.body;
    	students.push(newStudent);
        res.send(students);
    })
    router.route("/:id")
    .put((req,res)=>{
    	var id=req.params.id;
    	var studentToBeUpadated=students.filter((student)=>{
    		return student.rollNumber==id

    	})
    	studentToBeUpadated[0].name=req.body.name;
    	res.send(studentToBeUpadated)
    })
    .delete((req,res)=>{
        var id=req.params.id;

        var latestStudent=students.filter((student)=>{
            return student.rollNumber!=id
        })

        res.send(latestStudent)
    })


module.exports=router;