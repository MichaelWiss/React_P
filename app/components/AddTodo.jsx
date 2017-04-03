var React = require('react');


var AddTodo = React.createClass({
   handleSubmit: function (e) {
    e.preventDefault();
     var todoText = this.refs.todoText.value;

     if (todoText.length > 0) {
         this.refs.todoText.value = '';
         this.props.onAddTodo(toDoText);
     } else {

     }

    },
    	render: function (e) { 
    	return (
    		<div>
    		   <form onSubmit={thishandleSubmit}>
    		    <input type=text ref="todoText" placeholder="What do you need to do?"/>
    		    <button className="button expanded">Add Todo</button>
    		   </form>
    	    </div>
           );
    }
});

module.exports = AddTodo;