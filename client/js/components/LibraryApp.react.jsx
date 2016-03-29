var React = require('react');
var BookListView = require('./BookListView.react.jsx');
var LibraryViewActionCreators = require('../actions/LibraryViewActionCreators');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

// Define main Controller View
var LibraryApp = React.createClass({

  // Get initial state from stores
  getInitialState: function() {
    return {filterText: ""};
  },

  // Add change listeners to stores
  componentDidMount: function() {

  },

  // Remove change listers from stores
  componentWillUnmount: function() {
  },

  // Render our child components, passing state via props
  render: function() {
    var value = this.state.filterText;
    return (
      <div className="library-app">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#/books">Book Library</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#/books">Books <span className="sr-only">(current)</span></a></li>
              </ul>
              <form className="navbar-form navbar-right" role="search" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input type="text" className="form-control" value={value} onChange={this.handleChange}></input>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>
            </div>
          </div>
        </nav>
        <RouteHandler/>
      </div>
    );
  },

  handleChange: function(event) {
    this.setState({filterText: event.target.value});
  },

  handleSubmit: function (event) {
        event.stopPropagation();
        event.preventDefault();
        console.log(this.state.filterText);
        LibraryViewActionCreators.search(this.state.filterText);
  },

  _onChange: function() {
  }
});


module.exports = LibraryApp;
