
var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap','smart-table']);


<<<<<<< HEAD
=======

>>>>>>> d7f010cba46c9d4dca3b3b04301998c3414736ed
myApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {


        $routeProvider
            .when('/', {
                templateUrl: 'assets/views/templates/home.html',
                controller: 'HomeController'
            })
<<<<<<< HEAD
=======
            .when('/querys', {
                templateUrl: 'assets/views/routes/querys.html',
                controller: 'queryController'
            })
>>>>>>> d7f010cba46c9d4dca3b3b04301998c3414736ed
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    }]);
