myApp.factory("UserService", ["$http", function($http) {

  var data = {};

  var getNames = function() {
    return $http.get("/getnames").then(function(response) {
      data.response = response.data;
      return response.data;
    });
  };

<<<<<<< HEAD
  var logout = function(){
  $http.get("logout").then(function(){
    console.log("You have just logged out");
  });
};

=======
>>>>>>> d7f010cba46c9d4dca3b3b04301998c3414736ed
  var postNames = function(data) {
    console.log(data);
    return $http.post("/postnames", data).then(function(response) {
      return getNames();
    });
  };

  var newUser = function(data) {
    console.log('-@FACTORY userServcie.js newUser(data) = ', data);
    // $http.post('users/newuser', data).then(function(response) {
    //   // some sort of feedback that user was added to DB
    // });
  };

  return {

<<<<<<< HEAD
    logout : logout,
=======
>>>>>>> d7f010cba46c9d4dca3b3b04301998c3414736ed
    getNames : getNames,
    postNames : postNames,
    newUser: newUser,
    data : data

  };

}]);
