(function() {

	'use strict';

	angular.module('eliteApp').controller('LocationMapCtrl', ['$stateParams', LocationMapCtrl]);


	function LocationMapCtrl($stateParams) {
		var vm = this;

		vm.locationId = Number($stateParams.ic);

		vm.map = {
			center: {
				latitude: 38,
				longitude: 77,

			},
			zoom: 12

		};

	};

})();