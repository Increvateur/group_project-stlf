// ADD GOALS CONTROLLER - sends post to server for new goals

myApp.controller('AddGoalsController', ['$scope', 'GoalService', function($scope, GoalService) {

  console.log('HI, @CONTROLLER - AddGoalsController Works!');

  var goalService = GoalService;
  $scope.goals = {};
  $scope.months = ['september', 'october', 'november', 'december', 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august'];
  $scope.monthsObj = {
    months : [
      {
        name: 'September',
        value: 'september'
      },
      {
        name: 'October',
        value: 'october'
      },
      {
        name: 'November',
        value: 'november'
      },
      {
        name: 'December',
        value: 'december'
      },
      {
        name: 'January',
        value: 'january'
      },
      {
        name: 'February',
        value: 'february'
      },
      {
        name: 'March',
        value: 'march'
      },
      {
        name: 'April',
        value: 'april'
      },
      {
        name: 'May',
        value: 'may'
      },
      {
        name: 'June',
        value: 'june'
      },
      {
        name: 'July',
        value: 'july'
      },
      {
        name: 'August',
        value: 'august'
      }
    ]
  };
  $scope.fiscalyear = '';

  $scope.addFyKey = function(year) {
    var goals = {};
    $scope.key = year;
    console.log('## @goalController in addFyKey - $scope.key, goals: ', $scope.key, goals);
    goals[$scope.key] = {};
    console.log('! @goalController in addFyKey - goals: ', goals);
    $scope.goals = goals;
    return $scope.goals;
  };

  console.log('~ @goalController after addFyKey - $scope.goals: ', $scope.goals);

  $scope.saveGoals = function(data) {

    console.log('@goalController.js data (AKA: goals: ', data);
    goalService.newGoals(data);
  };

}]);
