var app = require("express")();
var bodyParser = require("body-parser");
var logger = require('morgan');
var apiController = require("./controllers/post");
var data = require("./models/posts");

app.use(bodyParser());
app.use(function (req, res, next) {

	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8001');

	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	res.setHeader('Access-Control-Allow-Credentials', true);

	// Pass to next layer of middleware
	next();
});
app.use(logger('dev'));

// app.get('/posts', function(req, res){
//    res.header("Access-Control-Expose-Headers", "X-Total-Count")
//    res.header("X-Total-Count", 100)
//    res.send(bookController.getAll(req, res));
// });

app.post('/authenticate', function(req, res){
   res.send(apiController.authen.checkAuthen(req, res));
});

app.route('/posts')
	.get(apiController.post.getAll)
	.post(apiController.post.create)
	.put()
	.delete();

app.listen(3333)