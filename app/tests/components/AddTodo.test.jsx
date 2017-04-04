var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
   it('should exist', () => {
     expect(AddTodo).toExist();
   });

   it('should call onAddTodo prop with valid data', () => {
     var spy = expect.createSpy();
     var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
   });
});