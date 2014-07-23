angular.module('starter.services', ['ngResource'])

    //Session factory
.factory('Session', function ($resource) {
        //this should be configured
    return $resource('http://localhost:5000/sessions/:sessionId');
});

