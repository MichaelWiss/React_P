var $ = require('jquery');

module.exports = {
	setTodos: function (todos) {
      if ($.isArray(todos)) {
        localStorage.setItem('todos', JSON.stringify(todos));
        return todos;
      }
    },
	getTodos: function () {

	}
};