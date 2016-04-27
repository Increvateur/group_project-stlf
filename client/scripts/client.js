
var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap','smart-table']);



myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {


        $routeProvider
            .when('/', {
                templateUrl: 'assets/views/templates/home.html',
                controller: 'HomeController'
            })
            .when('/charts', {
                templateUrl: 'assets/views/templates/charts.html',
                controller: 'ChartController'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);

    }]);
