myApp.controller("MainController", ["$scope", "STLFModule", function($scope, STLFModule) {

    $scope.names=[];

  $scope.addName = function(data) {
      var postItem = {
      "firstname": data.name
      };

      STLFModule.postNames(postItem)
      .then(function(){
        $scope.names = STLFModule.data.response;
      });

    };

  STLFModule.getNames()
    .then(function(){
      $scope.names = STLFModule.data.response;
      console.log("Names Retrieved!", $scope.names);
    });

}]);

myApp.controller('AddUserController', ['$scope', 'STLFModule', function($scope, STLFModule) {

  console.log('AddUserController Works!');

  var stlfModule = STLFModule;
  $scope.addUser = {};

  $scope.submit = function(data) {
    console.log('@mainController.js AddUserController data (AKA: addUser: ', data);
    stlfModule.newUser(data);
  };
}]);
