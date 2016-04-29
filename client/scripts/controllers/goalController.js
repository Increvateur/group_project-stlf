// ADD GOALS CONTROLLER - sends post to server for new goals

myApp.controller('AddGoalsController', ['$scope', 'GoalService', function($scope, GoalService) {

  console.log('HI, @CONTROLLER - AddGoalsController Works!');

  var goalService = GoalService;
  // $scope.goals = {};
  // $scope.months = ['september', 'october', 'november', 'december', 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august'];
  $scope.goals = {
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

  // $scope.addFyKey = function(year) {
  //   $scope.fiscalyear = year;
  //   return $scope.fiscalyear;
  // };

  // console.log('~ @goalController after addFyKey - $scope.goals: ', $scope.goals);

  $scope.saveGoals = function(data) {
    console.log('@goalController.js data (AKA: goals: ', data);


    $scope.key = data.fiscalyear;
    console.log('## @goalController in saveGoals - $scope.key, data: ', $scope.key, data);
    data[$scope.key] = data.months;
    delete data.months;
    delete data.fiscalyear;
    console.log('! @goalController in saveGoals - data: ', data);
    // data = goals;

    goalService.newGoals(data);
  };

}]);
