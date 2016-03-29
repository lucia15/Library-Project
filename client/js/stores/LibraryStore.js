(function() {
    "use strict";


    var AppDispatcher = require('../dispatcher/AppDispatcher');
    var EventEmitter = require('events').EventEmitter;
    var LibraryConstants = require('../constants/LibraryConstants');
    var merge = require('merge');

    var _books = [];
    var CHANGE_EVENT = 'change';

    var LibraryStore = merge(EventEmitter.prototype, {
        emitChange: function() {
            this.emit(CHANGE_EVENT);
        },

        addChangeListener: function(callback) {
            this.on(CHANGE_EVENT, callback);
        },

        getBook: function(id) {
            // Bad... I should convert the object array to be a map instead.

            var books = _books.filter(function(book) {
                return book.$.id === id;
            });

            if(books.length > 0) {
                return books[0];
            } else {
                // Added this to avoid the async problems with the real data. When the real data is
                // available a change event will be fired.
                return {title:[" "], author:[" "], description:[" "], genre:[" "], price:[" "], publish_date:[" "]};
            }


        },

        getAll: function() {
            return _books;
        }

    });

    LibraryStore.dispatchToken = AppDispatcher.register(function(payload) {
        var action = payload.action;

        switch(action.actionType) {

            case LibraryConstants.BOOKS_GET:
                _books = action.books;
                LibraryStore.emitChange();
                break;

            default:
            // do nothing
        }

    });

    module.exports = LibraryStore;
})();
