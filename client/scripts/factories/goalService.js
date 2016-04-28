myApp.factory("GoalService", ["$http", function($http) {

  var newGoals = function(goals) {
    console.log('*@FACTORY goalService, newGoals(goals): ', goals);

    // var convertGoals = function(goals){
    //
    //   var monthsArray = goals.months;
    //   var addGoals = {};
    //
    //   console.log('@goalController in convertGoals - monthsArray: ', monthsArray);
    //
    //   var goalsObj = {};
    //   goalsObj.key = {};
    //
    //   for(var i = 0; i < monthsArray.length; i++) {
    //
    //     var currentMonth = monthsArray[i];
    //     console.log('111@goalService ------- > currentMonth: ', currentMonth);
    //     var monthKey = currentMonth.value;
    //     console.log('222@goalService ------- > monthKey: ', monthKey);
    //
    //     goalsObj.key[monthKey] = {
    //       staff: currentMonth.staff,
    //       board: currentMonth.board,
    //       committee: currentMonth.committee,
    //       parent: currentMonth.parent,
    //       alum: currentMonth.alum,
    //       participant: currentMonth.participant,
    //       community: currentMonth.community,
    //       corporations: currentMonth.corporations,
    //       foundations: currentMonth.foundations,
    //       events: currentMonth.events
    //     };
    //     return goalsObj;
    //
    //   }
    //
    //   var key = goals.fiscalyear;
    //   addGoals[key] = goalsObj;
    //
    //   console.log('!!! --- @FACTORY goalService after convertGoals(goals) * addGoals[key]: ', addGoals[key]);
    //
    // };

    // convertGoals(goals);



    // $http.post('goals', data).then(function(response){
    //   // some sort of feedback that user was added to DB
    // });
  };

  return {
    newGoals: newGoals
  };

}]);
