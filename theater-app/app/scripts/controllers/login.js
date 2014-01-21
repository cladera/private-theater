'use strict';

angular.module('privateTheaterApp')
  .controller('LoginCtrl', ['$rootScope', '$scope', 'Auth', '$location', function ($rootScope, $scope, Auth, $location) {
    $scope.error = null;
    $scope.rememberme = true;
    $scope.login = function(){
      Auth.login({
        email: $scope.email,
        password: $scope.password,
        rememberme: $scope.rememberme
      }, function(){
        $location.path('/');
      }, function (){
        $scope.error = 'Failed to login';
      });
    };
  }]);
