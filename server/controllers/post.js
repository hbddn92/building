var actions = {
    post: {
        getAll: function(req, res) {
            var allbooks = data.posts;
            res.header("Access-Control-Expose-Headers", "X-Total-Count")
            res.header("X-Total-Count", 100)
            res.json(allbooks);
        },

        getOne: function(req, res) {
            var id = req.params.id;
            var book = data.posts[0]; 
            res.json(book);
        },

        create: function(req, res) {
            var newbook = req.body;
            data.push(newbook);
            res.json(newbook);
        },

        update: function(req, res) {
            var updatebook = req.body;
            var id = req.params.id;
            data[id] = updatebook 
            res.json(updatebook);
        },

        delete: function(req, res) {
            var id = req.params.id;
            data.splice(id, 1) 
            res.json(true);
        }
    },
    authen: {
        checkAuthen: function(req, res) {
            var allData = data;
            res.json(data.authenticate)
        },
    }
}

module.exports = actions;
