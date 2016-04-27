// query controller - Riley will play with salesforce querys here
myApp.controller('QueryController', ['$scope', 'QueryService', function($scope, QueryService) {

    console.log('QueryControllerWorks');

    $scope.data = [];
    $scope.forceData = [];
    $scope.forceresponse = [];



    var queryService = queryService;

    QueryService.getSalesforce();
    
    $scope.data = QueryService.data;

    $scope.forceData = QueryService.forceData;
    console.log("forcedata", QueryService.forceData);
    $scope.forceresponse = QueryService.forceresponse;



}]);
