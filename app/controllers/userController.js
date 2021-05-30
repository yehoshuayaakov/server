const InternSchema = require("../../model/internSchema");

function userController(){
    function createIntern(req, res){
        if(! req.body.name || ! req.body.phonenumber){
            return res.status(400).send("error");
        }

            var newIntern = new InternSchema(req.body);
            newIntern.save(function(err, newDoc){
                if(err){
                    console.log("not working");
                    var msg = "";
                    if(err.code == 11000){
                        msg = "User already exists";
                    }
                return res.status(500).send({msg});
               
            }
    res.status(201).send(newDoc);
    
}
)
    }
    function getIntern(req, res){
        InternSchema.findOne({Id: req.body.Id}, function(err, intern){
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
        InternSchema.updateOne({Id: req.params.id}, {$set: req.body}, function(err, result){
            if (err){
                return res.status(500).send();
            }
            res.status(200).send();
        })

    }
    function deleteIntern(req, res){
        InternSchema.deleteOne({_id: req.params._id}, function(err, result) {
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
        InternSchema.find(function(err, list){
            if (err){
                return res.status(500).send({"message" : "Problem with request"});
            }
            return res.status(200).send(list);
        })

    }
    return {
        createIntern,
        getIntern,
        updateIntern,
        deleteIntern,
        getAllInterns
    }
}

module.exports = userController();