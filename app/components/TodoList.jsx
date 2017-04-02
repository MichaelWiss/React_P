var React = require('react');

var TodoList = React.createClass({
    render: function () {
    	var {todos} = this.props;
    	var renderTodos = () => {
           return todo.map(() => {

           });
    	};
    	return (
            <div>
            {renderTodos()}
            </div>
    		)
    }
});

module.exports = TodoList;