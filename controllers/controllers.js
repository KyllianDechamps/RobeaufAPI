var Joke = require('../model/model.js');

exports.list_all_jokes = function(req, res) {
    Joke.getAllJokes(function(err, joke) {

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', joke);
        res.send(joke);
    });
};



exports.add_joke = function(req, res) {
    var new_joke = new Joke(req.body);

    //handles null error
    if(!new_joke.blague || !new_joke.type){

        res.status(400).send({ error:true, message: 'Please provide blague/type' });

    }
    else{

        Joke.createJoke(new_joke, function(err, task) {

            if (err)
                res.send(err);
            res.json(task);
        });
    }
};


exports.getJokeById = function(req, res) {
    Joke.getJokeById(req.params.id, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.updateJoke = function(req, res) {
    Joke.updateById(req.params.id, new Joke(req.body), function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.deleteJoke = function(req, res) {


    Joke.remove( req.params.id, function(err, task) {
        if (err)
            res.send(err);
        res.json({ message: 'Joke successfully deleted' , success : true});
    });
};