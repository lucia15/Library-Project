(function() {
    "use strict";

    var AppDispatcher = require('../dispatcher/AppDispatcher');
    var LibraryConstants = require('../constants/LibraryConstants');
    var LibraryAPI = require('../utils/LibraryAPI');

    var LibraryViewActionCreators = {


      search: function(searchText) {
            LibraryAPI.search(searchText, function(books) {
                AppDispatcher.handleViewAction({
                    actionType: LibraryConstants.BOOKS_GET,
                    books: books
                });
            });
        },

        saveBook: function(book) {
            LibraryAPI.saveBook(book, function() {
                // Do this after the save.
                LibraryAPI.getAllBooks();
            });
        },

        deleteBook: function(id) {
            LibraryAPI.deleteBook(id, function() {
                // Do this after the save.
                LibraryAPI.getAllBooks();
            });
        },

        newBook: function (book) {
            LibraryAPI.newBook(book, function() {
                // Do this after the save.
                LibraryAPI.getAllBooks();
            });
        }

    };

    module.exports = LibraryViewActionCreators;
})();
