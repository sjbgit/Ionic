(function() {

	'use strict';

	angular.module('eliteApp').controller('TestLocationCtrl', ['eliteApi', TestLocationCtrl]);

	function TestLocationCtrl(eliteApi) {
		var vm = this;

		vm.info = 'test';

		vm.mapCreated = function(map) {
    		vm.map = map;
  		};

		
  
	};

})();