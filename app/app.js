//Ideas backend
// @author a2wd.com

//Node+Express
var bodyParser = require("body-parser")
var express = require("express")
var app = express()
var path = require("path")
var www = path.normalize(__dirname + "/../public/")

//Express configuration
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//Serve js + css
app.use(express.static(www))

//Serve main page
app.get("/", function(req, res){
  res.sendFile(www + "index.html")
})

//Forward other requests to root
app.get("*", function(req, res){
  res.redirect(301, "/")
})

//Listen for requests
var port = process.env.PORT || 8000
app.listen(port, function(){
  console.log("Listening on " + port)
})
