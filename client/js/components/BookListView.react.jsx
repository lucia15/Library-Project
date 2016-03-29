var React = require('react');
var LibraryStore = require('../stores/LibraryStore');
var ReactRouter = require('react-router');

function getStateFromStores() {
  return {books: LibraryStore.getAll()};
};

var BookListView = React.createClass({

  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
      if (this.isMounted()) {
          LibraryStore.addChangeListener(this._onChange);
      }
  },

  // Render our child components, passing state via props
  render: function() {
    return (
        <div className="list-view">
            <div><a href="#/books/new"><button type="button" className="btn btn-success">New Book</button></a></div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.books.map(function(book, i){
                    return <BookRow title={book.title} author={book.author} key={book.$.id} id={book.$.id}/>
                  })
                }
              </tbody>
            </table>
        </div>
    );
  },

  _onChange: function() {
      if (this.isMounted()) {
          this.setState(getStateFromStores());
      }
  }
});

var BookRow = React.createClass({
  // Render our child components, passing state via props
  render: function() {
    return (
        <tr>
          <th> <a href={'#/books/'+ this.props.id}>{this.props.title}</a></th>
          <th> <a href={'#/books/'+ this.props.id}>{this.props.author}</a></th>
        </tr>
    );
  }
});

module.exports = BookListView;
