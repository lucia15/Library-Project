// This file bootstraps the entire application.

// React is ONLY responible for the view generation
var React = require('react');
// React router is used for the single page application routing
var ReactRouter = require('react-router');

var Route = ReactRouter.Route;
var Routes = ReactRouter.Routes;
var Link = ReactRouter.Link;
var DefaultRoute = ReactRouter.DefaultRoute;

var LibraryApp = require('./components/LibraryApp.react.jsx');
var BookListView = require('./components/BookListView.react.jsx');
var DetailedBookView = require('./components/DetailedBookView.react.jsx');

//CSS
var bootstrap = require('../css/bootstrap.min.css');
var mainCss = require('../css/app.css');

var LibraryAPI = require('./utils/LibraryAPI');
var PingAPI = require('./utils/PingAPI');

LibraryAPI.getAllBooks();

// React.render(
//   <LibraryApp />,
//   document.getElementById('library-app')
// );

var routes = (
  <Route name="app" path="/" handler={LibraryApp}>
    <Route name="books" handler={BookListView} />
    <Route name="book" path="books/:bookid" handler={DetailedBookView} />
  </Route>
);

ReactRouter.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
