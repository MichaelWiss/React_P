var React = require('react');


var AddTodo = React.createClass({
   handleSubmit: function (e) {
    e.preventDefault();
     var todoText = this.refs.todoText.value;

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