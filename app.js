var express = require('express')
var app = express();
var bodyParser = require('body-parser')
var mongoose = require('mongoose')


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")
app.use(express.static("public"));

app.get('/',function(req,res){
	res.render("login");
})

app.get('/home',function(req,res){
	res.render("home")
})

app.get('/dashboard',function(req,res){
	res.render("dashboard");
})

app.get('/pointA',function(req,res){
	res.render("formA");
})

app.get('/pointB',function(req,res){
	res.render("formB");
})

app.get('/pointC',function(req,res){
	res.render("formC");
})

app.listen(3000,process.env.IP,function(){
	console.log("The Server Has Started!");
})