myApp.factory("GoalService", ["$http", function($http) {

  var newGoals = function(goals) {
    console.log('*@FACTORY goalService, newGoals(goals): ', goals);


    // $http.post('goals', data).then(function(response){
    //   // some sort of feedback that user was added to DB
    // });
  };

  return {
    newGoals: newGoals
  };

}]);
