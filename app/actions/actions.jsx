export var setSearchText = (searchText) => {
	return {
		type: 'SET_SEARCH_TEXT',
		searchText
	};
};


//toggleShowCompleted TOGGLE_SHOW_COMPLETED
export var toggleShowCompleted = (toggleShowCompleted) => {
	return {
		type: 'TOGGLE_SHOW_COMPLETED',
		showCompleted
	};
};



export var addTodo = (text) => {
   return {
   	type: 'ADD_TODO',
   	text
   };
};

//toggleTodo(id) TOGGLE_TODO