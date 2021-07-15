const { Mongoose } = require("mongoose");
const InternSchema = require("../../model/internSchema.js");
const  crypto  = require("../utils/encrypt.js");
const Test = require("../../model/testSechema.js");
const testSechema = require("../../model/testSechema.js");
function userController(){
    function createIntern(req, res){
        console.log("tesst new server");
        if(! req.body.name || ! req.body.phonenumber)
        {
            return res.status(400).send("error");
        }
            //req.body.Id = crypto.cryptPassword(req.body.Id);
            console.log(req.body.Id);
            var newIntern = new InternSchema(req.body);
            newIntern.save(function(err, newDoc){
                if(err)
                {  
                    console.log(err.message)
                    console.log("not working");
                    var msg = "";
                    if(err.code == 11000)
                    {console.log("help");
                    console.log(err)
                        msg = "User already exists";
                    }
                return res.status(500).send({msg});   
                }
                console.log("ok");
        res.status(201).send(newDoc);
    })
}
    function getIntern(req, res){
        InternSchema.findOne({id: req.params._id}, function(err, intern){
            console.log(req.body);
            if (err){
                return res.status(500).send({"message": "Problem with DataBase request"})
            }
            if (!intern){
                return res.status(404).send();
            }
            res.status(200).send(intern);
        })
    }
    function updateIntern(req, res){
        var test = new testSechema(req.body.test);
        console.log("update Intern function");
        console.log(req.body)
        InternSchema.updateOne({id: req.params._id}, /*{$set: req.body},*/ {$addToSet: {tests : test}}, function(err, result){
            
          
            if (err){
                console.log(err.msg)
                return res.status(500).send();
            }
            console.log("test!!!!");
            console.log("this is the body " + `${req.body}`);
            console.log(test);
            res.status(200).send();
        })

    }
    function deleteIntern(req, res){
        InternSchema.deleteOne({id: req.params._id}, function(err, result) {
            if(err){
                return res.status(500).send();
            }
            if(! result){
                return res.status(404).send();
            }
            return res.status(200).send();
        })
    }
    function getAllInterns(req, res){
        
        console.log("jkujyhgfhf");
        InternSchema.find({}, function(err, list){
            
            if (err){
                return res.status(500).send({"message" : "Problem with request"});
            }
           //console.log(list);
            return res.status(200).send(list);
        })

    }
    function createTest(req, res){
        console.log("create test function");
     
            //req.body.Id = crypto.cryptPassword(req.body.Id);
            console.log(req.body);
            var newTest = new Test(req.body);
            newTest.save(function(err, newDoc){
                if(err)
                {  
                    console.log(err.message)
                    console.log("not working");
                    var msg = "";
                    if(err.code == 11000)
                    {console.log("help");
                        msg = "User already exists";
                    }
                return res.status(500).send({msg});   
                }
                console.log("should be working")
        res.status(201).send(newDoc);
    })
}
    function getTest(req, res){
        Test.findOne({id: req.params._id}, function(err, intern){
            console.log(req.body);
            if (err){
                return res.status(500).send({"message": "Problem with DataBase request"})
            }
            if (!intern){
                return res.status(404).send();
            }
            res.status(200).send(intern);
        })
    }
    function updateTest(req, res){
        Test.updateOne({id: req.params._id}, {$set: req.body}, function(err, result){
            if (err){
                return res.status(500).send();
            }
            
            console.log("testttt");
            console.log(req.body);
            res.status(200).send();
        })

    }
    function gradeTest(req, res){
        Test.updateOne({id: req.params._id, internId : req.params.intern_id}, {$set: req.body}, function(err, result){
            if (err){
                console.log(err.msg)
                return res.status(500).send();
            }
            
            console.log("testttt");
            console.log(req.body);
            //console.log(res);
            res.status(200).send();
        })

    }
    function deleteTest(req, res){
        Test.deleteOne({id: req.params._id}, function(err, result) {
            if(err){
                return res.status(500).send();
            }
            if(! result.n){
                return res.status(404).send();
            }
            return res.status(200).send();
        })
    }
    function getAllTests(req, res){
        
        //console.log("getting all tests");
        Test.find({}, function(err, list){
            
            if (err){
                return res.status(500).send({"message" : "Problem with request"});
            }
           //console.log(list);
            return res.status(200).send(list);
        })

    }
    return {
        createIntern,
        getIntern,
        updateIntern,
        deleteIntern,
        getAllInterns,
        createTest,
        getTest,
        updateTest,
        deleteTest,
        getAllTests,
        gradeTest
    }
}

module.exports = userController();