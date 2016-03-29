(function() {
    "use strict";

    var React = require('react');
    var LibraryStore = require('../stores/LibraryStore');
    var LibraryViewActionCreators = require('../actions/LibraryViewActionCreators');
    var Router = require('react-router');

    var DetailedBookView = React.createClass({

        mixins: [Router.Navigation, Router.State ],

        book: {},

        getStateFromStores: function(id) {
            this.book = LibraryStore.getBook(id);

            return {
                title: this.book.title[0],
                author: this.book.author[0],
                price: this.book.price[0],
                genre: this.book.genre[0],
                publish_date: this.book.publish_date[0],
                description: this.book.description[0] 
            };
        },

        getInitialState: function() {
            return this.getStateFromStores(this.getParams().bookid);
        },

        componentDidMount: function() {
            LibraryStore.addChangeListener(this._onChange);
        },

        componentWillUnmount: function () {
            //LibraryStore.remove
        },

        componentWillReceiveProps: function () {
            if (this.isMounted()) {
                this.setState(this.getStateFromStores(this.getParams().bookid));
            }
        },

        render: function() {
            var title = this.state.title;
            var author = this.state.author;
            var genre = this.state.genre;
            var price = this.state.price;
            var publishDate = this.state.publish_date;
            var description = this.state.description;

            return (
                <div className="list-view">
                    <div>Title: <input type="text" className="form-control" value={title} onChange={this.handleChangeTitle}></input></div>
                    <div>Author: <input type="text" className="form-control" value={author} onChange={this.handleChangeAuthor}></input></div>
                    <div>Genre: <input type="text" className="form-control" value={genre} onChange={this.handleChangeGenre}></input></div>
                    <div>Price: <input type="text" className="form-control" value={price} onChange={this.handleChangeTitlePrice}></input></div>
                    <div>Publish Date: <input type="text" className="form-control" value={publishDate} onChange={this.handleChangePublishDate}></input></div>
                    <div>Description: <textarea type="text" className="form-control" value={description} onChange={this.handleChangeDescription}></textarea></div>
                    <div><a href="#/books"><button type="button"  className="btn btn-default">Back</button></a></div>
                    <div><button type="button" className="btn btn-success" onClick={this.save}>Save</button></div>
                    <div><button type="button" className="btn btn-danger" onClick={this.delete}>Delete</button></div>
                </div>
            );
        },

        handleChangeTitle: function(event) {
            this.setState({title: event.target.value});
        },
        handleChangeAuthor: function(event) {
            this.setState({author: event.target.value});
        },
        handleChangeGenre: function(event) {
            this.setState({genre: event.target.value});
        },
        handleChangeTitlePrice: function(event) {
            this.setState({price: event.target.value});
        },
        handleChangePublishDate: function(event) {
            this.setState({publish_date: event.target.value});
        },
        handleChangeDescription: function(event) {
            this.setState({description: event.target.value});
        },

        save : function () {
            this.book.title = this.state.title;
            this.book.author = this.state.author;
            this.book.genre = this.state.genre;
            this.book.price = this.state.price;
            this.book.publish_date = this.state.publish_date;
            this.book.description = this.state.description;

            if(this.getParams().bookid === 'new') {
                LibraryViewActionCreators.newBook(this.book);
                this.transitionTo('books');
            } else {
                LibraryViewActionCreators.saveBook(this.book);
            }
        },

        delete: function () {
            if(this.getParams().bookid != 'new') {
                LibraryViewActionCreators.deleteBook(this.book.$.id);
                this.transitionTo('books');
            }

        },

        _onChange: function() {
            if (this.isMounted()) {
                this.setState(this.getStateFromStores(this.getParams().bookid));
            }
        }
    });

    module.exports = DetailedBookView;
})();
