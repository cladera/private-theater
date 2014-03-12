'use strict';

angular.module('privateTheaterApp')
  .controller('AdminReportsCtrl', ['$scope', 'MediaError', function ($scope, MediaError) {
    $scope.reports = MediaError.query();
    $scope.updateStatus = function (report, status){
      var prevStatus = report.status;
      report.status = status;
      //TODO: Update report
    };
  }]);
