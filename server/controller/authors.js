console.log("cakes.js is running")

const mongoose = require("mongoose");
const Author = mongoose.model("Author");

class AuthorController{
	getAll(req, res){
		Author.find({})
			.then(authors => res.json(authors))
			.catch(err => res.json(err));
	}

	create(req, res){
		const newAuthor = new Author(req.body);
		newAuthor.save()
				.then(()=> res.json({"msg": "はい, マスター"}))
				.catch(err => res.json(err));
	}

	getOne(req, res){
		let _id = req.params._id;
        Author.findOne({_id})
            .then(author => res.json(author))
            .catch(err => res.json(err));
	}

	update(req, res){
		let _id = req.params._id;
		Author.findByIdAndUpdate({_id}, req.body, {runValidators: true})
				.then(() => res.json({"msg": "はい, マスター"}))
				.catch(err => res.json(err));
	}

	delete(req, res){
		let _id = req.params._id;
		Author.findByIdAndDelete({_id})
				.then(() => res.json({"msg": "はい, マスター"}))
				.catch(err => res.json(err))
	}

}

module.exports = new AuthorController;