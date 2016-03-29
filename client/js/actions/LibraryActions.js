var AppDispatcher = require('../dispatcher/AppDispatcher');
var LibraryConstants = require('../constants/LibraryConstants');

var LibraryActions = {

  addBook: function(data) {
    AppDispatcher.handleAction({
      actionType: LibraryConstants.BOOK_ADD,
      data: data
    })
  },

  removeBook: function(index) {
    AppDispatcher.handleAction({
      actionType: LibraryConstants.BOOK_DELETE,
      data: index
    })
  },

  getBook: function(index) {
    AppDispatcher.handleAction({
      actionType: LibraryConstants.BOOK_GET,
      data: index
    })
  },

  editBook: function(data) {
    AppDispatcher.handleAction({
      actionType: LibraryConstants.BOOK_EDIT,
      data: data
    })
  },

  getBooks: function(data) {
    AppDispatcher.handleAction({
      actionType: LibraryConstants.BOOKS_GET,
      data: data
    })
  },

  serachBooks: function(data) {
    AppDispatcher.handleAction({
      actionType: LibraryConstants.BOOKS_SEARCH,
      data: data
    })
  }
};

module.exports = LibraryActions;
