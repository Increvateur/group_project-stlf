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
