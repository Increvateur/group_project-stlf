myApp.controller("MainController", ["$scope", "UserService", function($scope, UserService) {
  var userService = UserService;

  //  $scope.names=[];
  //
  //$scope.addName = function(data) {
  //    var postItem = {
  //    "firstname": data.firstname
  //    };
  //
  //    STLFModule.postNames(postItem)
  //    .then(function(){
  //      $scope.names = STLFModule.data.response;
  //    });
  //
  //  };
  //
  //STLFModule.getNames()
  //  .then(function(){
  //    $scope.names = STLFModule.data.response;
  //    console.log("Names Retrieved!", $scope.names);
  //  });


}]);


