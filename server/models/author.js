console.log("cake.js is running");
const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
	name:{
		type: String,
		required: [true, "Please enter an Author"],
		minlength: [2, "Your Author must have at least a 2 letter name"]
	},
	quote:{
		type: String,
		required: [true, "Your Author must have a quote"],
		minlength: [2, "Your Author must have a lengthy(2 letter) quote"]
	}
})

mongoose.model("Author", AuthorSchema);