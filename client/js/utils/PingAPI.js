(function() {
    var $ = require('jQuery');
    var APIConstants = require('./APIConstants');

	var PingAPI = {

		ping: function(callback) {
        $.ajax({
            url: APIConstants.url + "/api/ping",
            method: "GET"
        }).done(function (data) {
            callback();
        }).fail(function (jqXHR) {
            console.log("TODO: error message");
        });
      }
	};

	module.exports = PingAPI;
})();
