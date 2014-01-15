'use strict';

angular.module('privateTheaterApp')
  .controller('UserCtrl', ['$scope','User', function ($scope, User) {
    $scope.user = User.get();
  }]);
