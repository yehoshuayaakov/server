const express = require('express');
const userController = require('../app/controllers/userController.js')

var testRoutes = express.Router();

testRoutes.get("/getAll", userController.getAllTests);
testRoutes.post("/create", userController.createTest); 
testRoutes.put("/:_id/:intern_id", userController.gradeTest);

testRoutes.put("/:_id", userController.updateTest);
testRoutes.get("/:_id", userController.getTest);
testRoutes.delete("/:_id", userController.deleteTest);

module.exports = testRoutes;