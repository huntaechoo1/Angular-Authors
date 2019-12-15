console.log("mongoose.js is running");
const mongoose = require("mongoose");

module.exports = function(DB_Name) {
    mongoose.connect(`mongodb://localhost/${DB_Name}`);
    require("../models/author");
}