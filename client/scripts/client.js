
var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap','smart-table']);

myApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {


        $routeProvider
            .when('/', {
                templateUrl: 'assets/views/templates/home.html',
                controller: 'HomeController'
            })
            .when('/querys', {
                templateUrl: 'assets/views/routes/querys.html',
                controller: 'queryController'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    }]);
