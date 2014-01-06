'use strict';

angular.module('privateTheaterApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/movies/:movieId', {
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
