const express = require('express');
const userController = require('../app/controllers/userController.js')

var internRoutes = express.Router();
internRoutes.post("/create", userController.createIntern); 
internRoutes.put("/:id", userController.updateIntern);
internRoutes.get("/:id", userController.getIntern);
internRoutes.delete("/:id", userController.deleteIntern);
internRoutes.get('/getAll', userController.getAllInterns);

module.exports = internRoutes;
