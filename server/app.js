var app = require("express")();
var bodyParser = require("body-parser");
var logger = require('morgan');
var bookController = require("./controllers/post");
var data = require("./models/posts");

app.use(bodyParser());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8001');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
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


app.route('/posts')
    .get(bookController.getAll)
    .post(bookController.create)
    .put()
    .delete();

app.route('/books/:id')
    .get(bookController.getOne)
    .post()
    .put(bookController.update)
    .delete(bookController.delete);

app.listen(3333)