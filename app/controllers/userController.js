const { Mongoose } = require("mongoose");
const InternSchema = require("../../model/internSchema.js");
const  crypto  = require("../utils/encrypt.js");
const Supervisor = require("../../model/supervisorSechema.js")
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
                        msg = "User already exists";
                    }
                return res.status(500).send({msg});   
                }
                console.log("ok");
        res.status(201).send(newDoc);
    })
}
    function getIntern(req, res){
        InternSchema.findOne({Id: req.params._id}, function(err, intern){
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
        InternSchema.updateOne({Id: req.params._id}, {$set: req.body}, function(err, result){
            if (err){
                return res.status(500).send();
            }
            console.log("testttt");
            console.log(req.body);
            res.status(200).send();
        })

    }
    function deleteIntern(req, res){
        InternSchema.deleteOne({id: req.params.Id}, function(err, result) {
            if(err){
                return res.status(500).send();
            }
            if(! result.n){
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
           console.log(list);
            return res.status(200).send(list);
        })

    }
    function createSupervisor(req, res){
        if(! req.body.name || ! req.body.phonenumber)
        {
            return res.status(400).send("error");
        }
            //req.body.Id = crypto.cryptPassword(req.body.Id);
            console.log(req.body.Id);
            var newSupervisor = new Supervisor(req.body);
            newSupervisor.save(function(err, newDoc){
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
        res.status(201).send(newDoc);
    })
}
    function getSupervisor(req, res){
        Supervisor.findOne({Id: req.params._id}, function(err, intern){
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
    function updateSupervisor(req, res){
        Supervisor.updateOne({Id: req.params._id}, {$set: req.body}, function(err, result){
            if (err){
                return res.status(500).send();
            }
            console.log("testttt");
            console.log(req.body);
            res.status(200).send();
        })

    }
    function deleteSupervisor(req, res){
        Supervisor.deleteOne({id: req.params.Id}, function(err, result) {
            if(err){
                return res.status(500).send();
            }
            if(! result.n){
                return res.status(404).send();
            }
            return res.status(200).send();
        })
    }
    function getAllSupervisors(req, res){
        
        console.log("jkujyhgfhf");
        Supervisor.find({}, function(err, list){
            
            if (err){
                return res.status(500).send({"message" : "Problem with request"});
            }
           console.log(list);
            return res.status(200).send(list);
        })

    }
    return {
        createIntern,
        getIntern,
        updateIntern,
        deleteIntern,
        getAllInterns,
        createSupervisor,
        getSupervisor,
        updateSupervisor,
        deleteSupervisor,
        getAllSupervisors
    }
}

module.exports = userController();