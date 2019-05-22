var express=require("express");
var path=require("path");
var app=express();
app.use(express.static("public"))
app.get("/",(req,res)=> {
	// body...
	res.sendFile(path.join(__dirname,"public/index.html"))

})
/*app.get("/index", (req,res)=> {
	// body...
	res.sendFile(path.join(__dirname,"public.index/html"))

})*/
app.get("/contact",(req,res)=> {
	// body...
	res.sendFile(path.join(__dirname,"public/contact.html"))

})
app.listen(9000,function() {
	console.log("server is started")
	// body...
})