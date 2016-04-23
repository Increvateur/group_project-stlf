myApp.factory("STLFModule", ["$http", function($http) {

  var data = {};

  var getNames = function() {
    return $http.get("users/getnames").then(function(response) {
      data.response = response.data;
      return response.data;
    });
  };

  var postNames = function(data) {
    console.log(data);
    return $http.post("users/postnames", data).then(function(response) {
      return getNames();
    });
  };

  var newUser = function(data) {
    console.log(data);
  };

  return {

    getNames : getNames,
    postNames : postNames,
    data : data

  };

}]);
