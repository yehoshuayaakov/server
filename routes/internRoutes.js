const express = require('express');
const userController = require('../app/controllers/userController.js')

var internRoutes = express.Router();

internRoutes.get("/getAll", userController.getAllInterns);
internRoutes.post("/create", userController.createIntern); 
internRoutes.put("/:_id", userController.updateIntern);
internRoutes.get("/:_id", userController.getIntern);
internRoutes.delete("/:_id", userController.deleteIntern);

module.exports = internRoutes;
