const express = require('express');
var app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/angularDB',  { useNewUrlParser: true });
mongoose.connection.collection("interns").find(function(err, docs,c){
  console.log(docs.toArray(c));
})
mongoose.connection.on("error", function(){
  console.log("this is not working");});
  mongoose.connection.on('connected', function(){
    console.log("Mongoose default connection is open to ");
});
app.get('/', (req, res)=>{
//res.send("this actually worked")
}
)
//app.use(express.urlencoded({extended: false}))
app.use(require("cors")())
app.use(express.json());

var internRoutes = require('./routes/internRoutes.js')
app.use("/api/interns", internRoutes);
//app.use('/api/interns', require('./internSchema'))

app.listen(port, ()=> {
    console.log("server is up at " + port)
})
