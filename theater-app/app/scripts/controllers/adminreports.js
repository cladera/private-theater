'use strict';

angular.module('privateTheaterApp')
  .controller('AdminReportsCtrl', ['$scope', 'MediaError', function ($scope, MediaError) {
    $scope.statusFilter = 'open';
    $scope.reports = MediaError.query();
    $scope.updateStatus = function (report, status){
      //TODO: Restore previous status if update fails
      // var prevStatus = report.status;
      report.status = status;
      report.$update(function(){
        console.log(report);
      });
    };
    $scope.isFilterActive = function(filter){
      return ($scope.statusFilter === filter);
    };
  }]);
