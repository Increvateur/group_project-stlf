// ADD GOALS CONTROLLER - sends post to server for new goals

myApp.controller('AddGoalsController', ['$scope', 'GoalService', function($scope, GoalService) {

  console.log('HI, @CONTROLLER - AddGoalsController Works!');

  var goalService = GoalService;

  $scope.goals = {};
  // $scope.months = ['september', 'october', 'november', 'december', 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august'];
  $scope.monthsObj = {
    months : [
      {
        name: 'September',
        key: 'september'
      },
      {
        name: 'October',
        key: 'october'
      },
      {
        name: 'November',
        key: 'november'
      },
      {
        name: 'December',
        key: 'december'
      },
      {
        name: 'January',
        key: 'january'
      },
      {
        name: 'February',
        key: 'february'
      },
      {
        name: 'March',
        key: 'march'
      },
      {
        name: 'April',
        key: 'april'
      },
      {
        name: 'May',
        key: 'may'
      },
      {
        name: 'June',
        key: 'june'
      },
      {
        name: 'July',
        key: 'july'
      },
      {
        name: 'August',
        key: 'august'
      }
    ]
  };
  $scope.fiscalyear = '';

  $scope.addFyKey = function(year) {
    $scope.fiscalyear = year;
    return $scope.fiscalyear;
  };

  // console.log('~ @goalController after addFyKey - $scope.goals: ', $scope.goals);

  $scope.saveGoals = function(data) {
    var addGoals = {};
    console.log('@goalController.js data (AKA: goals: ', data);
    console.log('@goalController.js fiscalyear: ', $scope.fiscalyear);

    // $scope.key = $scope.fiscalyear;
    // console.log('## @goalController in saveGoals - $scope.key, data: ', $scope.key, data);
    // addGoals[$scope.key] = data;
    console.log('! @goalController in saveGoals - data: ', data);
    goalService.newGoals(data);
  };

}]);
