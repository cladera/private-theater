'use strict';

angular.module('privateTheaterApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(['$routeProvider', '$locationProvider',function ($routeProvider) {
    var access = routingConfig.accessLevels;
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        access: access.user
      })
      .when('/movies/:movieId', {
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl',
        access: access.user
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        access: access.user
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        access: access.anon

      })
      .when('/admin/movies/new', {
        templateUrl: 'views/newmovie.html',
        controller: 'NewmovieCtrl',
        access: access.admin
      })
      .otherwise({
        redirectTo: '/404'
      });
    //$locationProvider.html5Mode(true);
  }])
  .run(['$rootScope', '$location', '$http', 'Auth', function ($rootScope, $location, $http, Auth) {
    var access = routingConfig.accessLevels;
    $rootScope.$on('$routeChangeStart', function (event, next) {
      $rootScope.error = null;
      next.access = next.access || access.public;
      if (!Auth.authorize(next.access)) {
        if(Auth.isLoggedIn()){
          $location.path('/');
        } else {
          $location.path('/login');
        }
      }
    });
  }]);