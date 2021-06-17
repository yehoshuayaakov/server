const express = require('express');
//const { cryptPassword } = require('../app/utils/encrypt.js');
const InternModel = require('../model/internSchema.js');
const Crypto = require('../utils/encrypt.js');
const Token = require('../model/tokenSchema.js');
const { compare } = require('bcryptjs');

var loginRoutes = express.Router();



loginRoutes.post("/register", function(req, res){
    req.body.password = Crypto.cryptPassword(req.body.password)
    InternModel.updateOne({email: req.body.email}, {$set : req.body}, function (err, result){
        if (err){
            console.log("problem!!")
            return res.status(500).send();
        }
        console.log(req.body.password);
        return res.status(200).send({password: result.password});
    })
});

loginRoutes.post("/login", function(req, res){
    
    InternModel.findOne({email: req.body.email},
        { name: 1, Id: 1, phonenumber: 1, roleNumber: 1, password: 1, email: 1}, function (err, doc){
            //console.log(doc.password);
            console.log(req.body);
            console.log(doc);
            console.log(doc.password);
            if (err){
                return res.status(500).send();
            }
            if(!doc){
                return res.status(401).send({msg: "id does not exist"});
            }
            if (!Crypto.compare(req.body.password, doc.password)){
                return res.status(401).send({msg: "Id is incorrect"});
            }
           if (req.body.email !== doc.email){
               console.log(req.body.name + " " + doc.name);
               return res.status(401).send({msg: "invalid entry"});

           }

            var token = new Token(true,null, doc.name, doc.Id, doc.phonenumber);
            console.log( "the token is " + token.token);
            res.status(200).send({token: token.token, name: doc.name, roleNumber: doc.roleNumber});
        })  
    

});

module.exports = loginRoutes;