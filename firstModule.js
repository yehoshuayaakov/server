const express = require('express');
var app = express();
const port = process.env.PORT || 3000;
var userToken = require('./model/tokenSchema.js')

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/angularDB',  { useNewUrlParser: true }, function (err) {
  if (err) console.log("connect fail");
  console.log("Database connected");
});
//mongoose.connection.collection("interns").find(function(err, docs,c){
 // console.log(docs.toArray(c));
//})
//mongoose.connection.on("error", function(){
 // console.log("this is not working");});
  mongoose.connection.on('connected', function(){
    console.log("Mongoose default connection is open to " + port);
});
app.get('/', (req, res)=>{
res.send("this actually worked")
}
)
//app.use(express.urlencoded({extended: false}))
app.use(require("cors")())
app.use(express.json());
app.use("/api",function(req,res,next){
  var token = new userToken(false, req.headers['x-access-token']);
if (token.isNotExpired()){
  req.user = token;
  return next();
}
console.log("expired(middleware)");
res.status(401).send();
})
var internRoutes = require('./routes/internRoutes.js');
var supervisorRoutes = require('./routes/supervisorRoutes.js')
app.use("/api/interns", internRoutes);
app.use("/api/supervisors", supervisorRoutes);
app.use("/createUser", internRoutes);
var loginRoutes = require('./routes/loginRoutes.js');
app.use("/auth", loginRoutes);


//app.use('/api/interns', require('./internSchema'))

app.listen(port, ()=> {
    console.log("server is up at " + port)
})
