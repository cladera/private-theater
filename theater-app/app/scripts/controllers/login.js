'use strict';

angular.module('privateTheaterApp')
  .controller('LoginCtrl', ['$rootScope', '$scope', 'Auth', '$location', function ($rootScope, $scope, Auth, $location) {

    $scope.rememberme = true;
    $scope.login = function(){
      Auth.login({
        email: $scope.email,
        password: $scope.password,
        rememberme: $scope.rememberme
      }, function(){
        $location.path('/');
      }, function (){
        $rootScope.error = 'Failed to login';
      });
    };
  }]);
