var React = require('react');

var TodoSearch = React.createClass({
	render: function () {
		return (
           <div>
           <div>
           	  <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
           </div>
           <div>
           	  <label>
           	    <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
           	  </label>
           </div>
           </div>
			)
	}

});

module.exports = TodoSearch;