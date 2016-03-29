(function() {
    var LibraryServerActionCreators = require('../actions/LibraryServerActionCreators');
    var APIConstants = require('./APIConstants');
    var $ = require('jQuery');

    var LibraryAPI = {

      getAllBooks: function() {
        $.ajax({
            url: APIConstants.url + "/api/books",
            method: "GET"
        }).done(function (data) {
            LibraryServerActionCreators.receiveAllBooks(data);
        }).fail(function (jqXHR) {
            console.log("TODO: error message");
        });
      },

      search: function(searchText, callback) {
        $.ajax({
            url: APIConstants.url + "/api/books?title="+searchText,
            method: "GET"
        }).done(function (data) {
            callback(data);
        }).fail(function (jqXHR) {
            console.log("TODO: error message");
        });
      },

      saveBook: function (book, callback) {
          $.ajax({
              url: APIConstants.url + "/api/books/"+book.$.id,
              method: "POST",
              data: JSON.stringify(book),
              contentType: "application/json; charset=utf-8"
          }).done(function () {
              callback();
          }).fail(function (jqXHR) {
              console.log("TODO: error message");
          });

      },

      deleteBook: function (id, callback) {
          $.ajax({
              url: APIConstants.url + "/api/books/"+id,
              method: "DELETE"
          }).done(function () {
              callback();
          }).fail(function (jqXHR) {
              console.log("TODO: error message");
          });

      },

      newBook: function (book, callback) {
          $.ajax({
              url: APIConstants.url + "/api/books",
              method: "PUT",
              data: JSON.stringify(book),
              contentType: "application/json; charset=utf-8"
          }).done(function () {
              callback();
          }).fail(function (jqXHR) {
              console.log("TODO: error message");
          });
        }
    };
    module.exports = LibraryAPI;
})();
