// Load Express Module
var express=require("express");
var app=express();

app.get("/",function(req,resp){
  resp.sendFile(__dirname+"/views/regestration/index.html");
})


app.post("/home",function(req,resp){
  resp.sendFile(__dirname+"/views/regestration/home.html");
})

app.get("/signup",function(req,resp){
  resp.sendFile(__dirname+"/views/regestration/signup.html");
})


app.listen(8090);
