var sql = require('./database.js');

//Task object constructor
var Joke = function(task){
    this.blague = task.blague;
    this.type = task.type;
};
Joke.createJoke = function (newJoke, result) {
    sql.query("INSERT INTO blague set ?", newJoke, function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Joke.getJokeById = function (jokeid, result) {
    sql.query("Select task from blague where id = ? ", jokeid, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);

        }
    });
};
Joke.getAllJokes = function (result) {
    sql.query("Select * from blague", function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('jokes : ', res);

            result(null, res);
        }
    });
};
Joke.updateById = function(id, task, result){
    sql.query("UPDATE blague SET joke = ? WHERE id = ?", [joke.blague, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
Joke.remove = function(id, result){
    sql.query("DELETE FROM blague WHERE id = ?", [id], function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{

            result(null, res);
        }
    });
};

module.exports= Joke;