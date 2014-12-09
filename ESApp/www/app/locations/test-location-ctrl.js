(function() {

	'use strict';

	angular.module('eliteApp').controller('TestLocationCtrl', ['eliteApi', '$ionicLoading', TestLocationCtrl]);

	function TestLocationCtrl(eliteApi, $ionicLoading) {
		var vm = this;

		vm.info = 'test';

		//vm.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

		

		vm.mapCreated = function(map) {
    		vm.map = map;
  		};

  		vm.centerOnMe = function () {
    		console.log("Centering"); 
    		if (!vm.map) {
      			return;
    		}

    		/*
    		vm.loading = $ionicLoading.show({
      			content: 'Getting current location...',
      			showBackdrop: false
    		});
			*/

    		navigator.geolocation.getCurrentPosition(function (pos) {
      			console.log('Got pos', pos);
      			vm.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      			vm.loading.hide();
    		}, function (error) {
      			alert('Unable to get location: ' + error.message);
    		});
  		};


		
  
	};

})();