(function() {

	'use strict';

	angular.module('eliteApp').controller('TestLocationCtrl', ['eliteApi', TestLocationCtrl]);

	function TestLocationCtrl(eliteApi) {
		var vm = this;

		vm.info = 'test';

		vm.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

		/*

		vm.mapCreated = function(map) {
    		vm.map = map;
  		};

		*/
  
	};

})();