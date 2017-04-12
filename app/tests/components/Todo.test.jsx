var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoApp = require('TodoApp');

describe('Todo', () => {
   it('should exist', () => {
     expect(TodoApp).toExist();
   });

   it('should call onToggle prop with id on click', () => {
     var todoDate = {
     	id: 199,
     	text: 'Write todo.test.jsx test',
     	completed: true
     };
   });
});