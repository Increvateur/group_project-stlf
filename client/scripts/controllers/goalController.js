// ADD GOALS CONTROLLER - sends post to server for new goals

myApp.controller('AddGoalsController', ['$scope', 'GoalService', function($scope, GoalService) {

  console.log('HI, @CONTROLLER - AddGoalsController Works!');

  var goalService = GoalService;
  $scope.months = ['september', 'october', 'november', 'december', 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august'];
  $scope.addGoals = {};


  $scope.saveGoals = function(data) {
    console.log('@goalController.js data (AKA: addGoals: ', data);
    // goalService.newGoals(data);
  };

}]);
