var AppDispatcher = require('../dispatcher/AppDispatcher');
var LibraryConstants = require('../constants/LibraryConstants');

var LibraryServerActionCreators = {

  receiveAllBooks: function(books) {
    AppDispatcher.handleServerAction({
      actionType: LibraryConstants.BOOKS_GET,
      books: books
      
    });
  }

};

module.exports = LibraryServerActionCreators;
