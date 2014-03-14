'use strict';

angular.module('privateTheaterApp')
  .controller('AdminCtrl', ['$scope', '$rootScope', 'MediaError',function ($scope, $rootScope, MediaError) {
    $rootScope.reports = MediaError.query();
    $scope.reports = $rootScope.reports;
  }]);
