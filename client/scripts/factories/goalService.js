myApp.factory("GoalService", ["$http", function($http) {

  var newGoals = function(goals) {
    console.log('*@FACTORY goalService, newGoals(addGoals): ', goals);

    // var convertGoals = function(data){
    //   var key = data.fiscalyear;
    //   var addGoals = {};
    //   addGoals[key] = data.months;
    //   console.log('@goalController in saveGoals/goalsObjFunction(goals) - addGoals: ', addGoals);
    // };


    // $http.post('goals', data).then(function(response){
    //   // some sort of feedback that user was added to DB
    // });
  };

  return {
    newGoals: newGoals
  };

}]);
