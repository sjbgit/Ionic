(function() {

	'use strict';

	angular.module('eliteApp').controller('DataAccessCtrl', ['dataService', DataAccessCtrl]);

	function DataAccessCtrl(dataService) {
		var vm = this;

		vm.log = [];


		var result = dataService.dataFactory.getRunning()
			.success(function(data, status, headers, config) {
      			console.log('success: ' + data);
    		}).
    		error(function(data, status, headers, config) {
      			// log error
      			console.log('error: ' + data);
    		});


    	var result1 = dataService.dataFactory.log()
			.success(function(data, status, headers, config) {
      			console.log('success: ' + data);

      			vm.log = data;

      			console.log("log: " + vm.log);
    		}).
    		error(function(data, status, headers, config) {
      			// log error
      			console.log('error: ' + data);
    		});


		console.log(result);

/*
		var res = dataService.resource.get({}, function() {

			console.log('in get');

		});

*/

/*
		var result = dataService.get({}, function() {
			console.log(data);
		});
*/
  
	}; 

})(); 


