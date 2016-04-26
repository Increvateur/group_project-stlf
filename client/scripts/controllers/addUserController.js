/**
 * Created by JFCS on 4/26/16.
 */
myApp.controller('AddUserController', ['$scope', 'UserService', function($scope, UserService) {

    console.log('AddUserController Works!');

    var userService = UserService;
    $scope.addUser = {};

    $scope.submit = function(data) {
        console.log('@mainController.js AddUserController data (AKA: addUser: ', data);
        userService.newUser(data);
    };
}]);