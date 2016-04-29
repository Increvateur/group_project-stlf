/**
 * Created by JFCS on 4/26/16.
 */
myApp.controller('UserController', ['$scope', '$http', '$window', function($scope, $http, $window) {
    $scope.userName ='';

    // This happens after page load, which means it has authenticated if it was ever going to
    // NOT SECURE
    $http.get('/user').then(function(response) {
        if(response.data) {
            $scope.userName = response.data.username;
            console.log('User Data: ', $scope.userName);
        } else {
            $window.location.href = '/index.html';
        }
    });
    // $scope.logOut = function(){
    //     console.log("in the app, logout?");
    //     $http.get('/index/logout').then(function(response) {
    //         $window.location.href = '/index.html';
    //     });
    // };
}]);
