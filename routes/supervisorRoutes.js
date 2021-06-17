const express = require('express');
const userController = require('../app/controllers/userController.js')

var supervisorRoutes = express.Router();

supervisorRoutes.get("/getAll", userController.getAllSupervisors);
supervisorRoutes.post("/create", userController.createSupervisor); 
supervisorRoutes.put("/:_id", userController.updateSupervisor);
supervisorRoutes.get("/:_id", userController.getSupervisor);
supervisorRoutes.delete("/:_id", userController.deleteSupervisor);

module.exports = supervisorRoutes;