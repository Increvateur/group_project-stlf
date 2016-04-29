myApp.factory("GoalService", ["$http", function($http) {

<<<<<<< HEAD
  var newGoals = function(goals) {
    console.log('*@FACTORY goalService, newGoals(goals): ', goals);


=======
  var newGoals = function(addGoals) {
    console.log('*@FACTORY goalService, newGoals(addGoals): ', addGoals);
>>>>>>> 40980157c704ba7401ab7889fcc9203ad8642a76
    // $http.post('goals', data).then(function(response){
    //   // some sort of feedback that user was added to DB
    // });
  };

  return {
    newGoals: newGoals
  };

}]);
