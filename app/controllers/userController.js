const InternSchema = require("../../internSchema.js");

function userController(){
    function createIntern(req, res){
        var newIntern = new InternSchema(req.body);
        newIntern.save(function(err, newDoc){
        if (err){

    }
    res.status(201).send(newDoc);
    
}
)
    }
    function getIntern(req, res){

    }
    function updateIntern(req, res){

    }
    function deleteIntern(req, res){

    }
    function getAllInterns(req, res){

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