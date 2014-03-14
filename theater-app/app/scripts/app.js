'use strict';

angular.module('privateTheaterApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
])
  .config(['$routeProvider', '$locationProvider',function ($routeProvider) {
    var access = routingConfig.accessLevels;
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        access: access.user
      })
      .when('/admin/movie/:movieId/edit', {
        templateUrl: 'views/editmovie.html',
        controller: 'EditmovieCtrl',
        access: access.admin
      })
      .when('/movies/:movieId/:mediaIndex?', {
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
      .when('/admin/reports', {
        templateUrl: 'views/adminreports.html',
        controller: 'AdminReportsCtrl'
      })
      .when('/admin/movies/new', {
        templateUrl: 'views/newmovie.html',
        controller: 'NewmovieCtrl',
        access: access.admin
      })
      .when('/admin/users/new', {
        templateUrl: 'views/newuser.html',
        controller: 'NewuserCtrl',
        access: access.admin
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
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