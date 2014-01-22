'use strict';

angular.module('privateTheaterApp')
  .controller('NewuserCtrl', ['$scope','User',function ($scope, User) {
    $scope.user = new User();
    $scope.submit = function(){
      console.log($scope.user);
    };
  }]);
