// ADD GOALS CONTROLLER - sends post to server for new goals

myApp.controller('AddGoalsController', ['$scope', 'GoalService', function($scope, GoalService) {

  console.log('HI, @CONTROLLER - AddGoalsController Works!');

  var goalService = GoalService;
  $scope.months = ['september', 'october', 'november', 'december', 'january'];
  // , 'february', 'march', 'april', 'may', 'june', 'july', 'august'
  $scope.addGoals = {
    september: {},
    october: {},
    novemeber: {}
  };


  // $scope.submit = function(data) {
  //   console.log('@mainController.js AddUserController data (AKA: addUser: ', data);
  //   stlfModule.newUser(data);
  // };

  // months: [
  //   {
  //     month: 'september',
  //     goals: {
  //       staff: '',
  //       board: ''
  //     }
  //   },
  //   {
  //     month: 'october',
  //     goals: {
  //       staff: '',
  //       board: ''
  //     }
  //   }
  // ]
}]);
