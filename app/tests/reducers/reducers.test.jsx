var expect = require('expect');

var reducers = require('reducers');

describe('Reducers', () => {
   describe('searchTextReducer', () => {
     it('should set searchText', () => {
      	var action = {
      		type: 'SET_SEARCH_TEXT',
      		searchText: 'dog'
      	};
      	var res = reducers.searchTextReducer('', action);

      	expect(res).toEqual(action.searchText);
      });
   });

   describe('showCompletedreducer', () => {
     it('should toggle show completed', () => {
      var action = {
          type: 'TOGGLE_SHOW_COMPLETED'
      };
     });
   });
});