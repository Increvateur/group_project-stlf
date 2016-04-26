myApp.factory("GoalService", ["$http", function($http) {

  var newGoals = function(addGoals) {
    console.log('*@FACTORY goalService, newGoals(addGoals): ', addGoals);
    // $http.post('goals', data).then(function(response){
    //   // some sort of feedback that user was added to DB
    // });
  };

  return {
    newGoals: newGoals
  };

}]);
