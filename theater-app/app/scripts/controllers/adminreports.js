'use strict';

angular.module('privateTheaterApp')
  .controller('AdminReportsCtrl', ['$scope', 'MediaError', function ($scope, MediaError) {
    $scope.reports = MediaError.query();
  }]);
