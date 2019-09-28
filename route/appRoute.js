'use strict';

var todoList = require("../controller/appController");

function route(app) {
    app.route("/tasks")
        .get(todoList.list_all_task)
        .post(todoList.create_a_task);
    
    app.route("/tasks/:taskId")
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);
}

module.exports = route;