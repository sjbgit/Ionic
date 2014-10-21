angular.module('starter.controllers', ['ngCordova'])

.controller('DashCtrl', function($scope, $cordovaDialogs) {


        console.log($cordovaDialogs);

        console.log($cordovaDialogs.alert);
        $scope.show = function() {
            //$cordovaDialogs.alert('Wow');
            //alert('test');


            $cordovaDialogs.alert('Wow!', "Alert Title", "Dismiss");
        }

        function alertClosed(){
            $cordovaDialogs.alert("Alert was closed.");
        }


})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
