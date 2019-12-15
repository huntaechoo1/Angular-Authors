console.log("route.js is running")
const Author = require("../controller/authors")


module.exports = function(app){
	app.get('/authors', Author.getAll);
	app.post('/authors', Author.create);
	app.get('/authors/:_id', Author.getOne);
	app.put('/authors/:_id', Author.update);
	app.delete('/authors/:_id', Author.delete);
}