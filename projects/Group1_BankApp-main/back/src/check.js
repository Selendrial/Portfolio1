// Result.js
const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

 
const Result = ({ guess, secretNum }) => {
    if (guess === secretNum) {
    return ( true)
    } else {
    return ( false)
    }
}
 
export default Result