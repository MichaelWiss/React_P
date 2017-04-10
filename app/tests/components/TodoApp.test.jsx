var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var Todo = require('Todo');

describe('Todo', () => {
   it('should exist', () => {
     expect(Todo).toExist();
   });

   it('should add todo to the todos state on handleAddTodo' () => {
      var todoText = 'test text';
      var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

      todoApp.setState({todos: []});
      todoApp.handleAddTodo
   });
});