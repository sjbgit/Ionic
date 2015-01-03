(function() {
	'use strict';

	angular.module('eliteApp').factory('mapService', [mapService]);

	function mapService() {
		var vm = this;

		var options = {};

    	/*
    	dataFactory .resource = $resource(urlBase + '/:id', {
            id: '@_id'
        }, { //parameters default
            update: {
                method: 'PUT'
            }
        });

		*/
		return {
			mapOptions: options			
			//resource: $resource('http://localhost:8080/api/running')
		};

/*

		return {
            resource: $resource            
        };
*/
	};


})(); 