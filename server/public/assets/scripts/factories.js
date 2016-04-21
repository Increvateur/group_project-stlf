myApp.factory("STLFModule", ["$http", function($http) {

  var data = {};

  var getNames = function() {
    return $http.get("/getnames").then(function(response) {
      data.response = response.data;
      return response.data;
    });
  };

  var postNames = function(data) {
    return $http.post("/postnames", data).then(function(response) {
      return getNames();
    });
  };

  return {

    getNames : getNames,
    postNames : postNames,
    data : data

  };

}]);
