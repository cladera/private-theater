'use strict';

angular.module('privateTheaterAdminAppApp', [
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
      .when('/new', {
        templateUrl: 'views/new.html',
        controller: 'NewCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .when('/users/new', {
        templateUrl: 'views/new_user.html',
        controller: 'NewUserCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
