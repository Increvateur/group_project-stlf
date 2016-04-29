myApp.controller("loginController", ["$scope", "$uibModalInstance", function($scope, $uibModalInstance) {

  $scope.close = function() {
      $uibModalInstance.close();
  };
}]);
