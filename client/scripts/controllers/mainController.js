<<<<<<< HEAD
myApp.controller("MainController", ["$scope", "UserService", "$uibModal", function($scope, UserService, $uibModal) {
  var userService = UserService;

// login modal

  $scope.open = function () {
    // ModalService.openModal({
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: './views/routes/loginMotal.html',
      controller: 'loginController',
      size: size,
      keyboard: true
    });
  };
}]);

myApp.controller("loginController", ["$scope", "$uibModalInstance", function($scope, $uibModalInstance) {

  $scope.close = function() {
      $uibModalInstance.close();
  };
}]);

// end login modal
=======
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


>>>>>>> d7f010cba46c9d4dca3b3b04301998c3414736ed
