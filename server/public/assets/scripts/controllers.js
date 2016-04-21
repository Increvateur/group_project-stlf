myApp.controller("MainController", ["$scope", "STLFModule", function($scope, STLFModule) {

  $scope.addName = function(data) {
      var postItem = {
      "name": data.name
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
