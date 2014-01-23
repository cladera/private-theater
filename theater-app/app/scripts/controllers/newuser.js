'use strict';

angular.module('privateTheaterApp')
  .controller('NewuserCtrl', ['$scope','$location', 'User',function ($scope, $location, User) {
    $scope.error = '';
    $scope.user = new User();
    $scope.submit = function(){
      $scope.user.$save(function(){
        $location.path('/admin');
      }, function(){
        $scope.error = 'Impossible to create user';
      });
    };
  }]);
