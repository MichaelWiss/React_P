var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');


var TodoApp = React.createClass({
	getInitialState: function () {
       return {
        showCompleted: false,
        searchText: '',
          todos: [
             {
             	id: uuid(),
             	text: 'Walk the dog',
              completed: false
             }, {
             	id: uuid(),
             	text: 'Clean the yard',
              completed: true
             }, {
             	id: uuid(),
             	text: 'Work out',
              completed: true
             }, {
             	id: uuid(),
             	text: 'Do the laundry',
              completed: false
             }
          ]
       };
	},

  handleAddTodo: function (text) {
    this.setState({
       todos: [
         ...this.state.todos,
         {
           id: uuid(),
           text: text,
           completed: false
         }
       ]
    });
   },
   handleToggle: function (id) {
      alert(id);
   },
   handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
   },
   render: function () {
   	var {todos} = this.state;

   	return (
   		<div>
       <TodoSearch onSearch={this.handleSearch}/>
   		 <TodoList todos={todos} onToggle={this.handleToggle}/>
       <AddTodo onAddTodo={this.handleAddTodo}/>
   		</div>
   		)
   }
});

module.exports = TodoApp;