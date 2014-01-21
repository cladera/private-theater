'use strict';

angular.module('privateTheaterApp')
  .controller('UserCtrl', ['$scope','Auth', function ($scope, Auth) {
    $scope.user = Auth.user;
  }]);
