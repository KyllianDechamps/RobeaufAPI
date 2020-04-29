module.exports = function(app) {
    var controller = require('../controllers/controllers');

    // todoList Routes
    app.route('/beauf')
        .get(controller.list_all_jokes)
        .post(controller.add_joke)
    app.route('/beauf/:id')
        .get(controller.getJokeById)
        .put(controller.updateJoke)
        .delete(controller.deleteJoke)
};