/**
 * Dispatcher is used to broadcast payloads to registered callbacks. This is
 * different from generic pub-sub systems in two ways:
 *
 *   1) Callbacks are not subscribed to particular events. Every payload is
 *      dispatched to every registered callback.
 *   2) Callbacks can be deferred in whole or part until other callbacks have
 *      been executed.
 */
	 
(function () {
	
	var Dispatcher = require('flux').Dispatcher;

	var AppDispatcher = new Dispatcher();

	AppDispatcher.handleViewAction = function(action) {
	  this.dispatch({
	    source: 'VIEW_ACTION',
	    action: action
	  });
	}

	AppDispatcher.handleServerAction = function(action) {
	  this.dispatch({
	    source: 'SERVER_ACTION',
	    action: action
	  });
	};

	module.exports = AppDispatcher;
})();
