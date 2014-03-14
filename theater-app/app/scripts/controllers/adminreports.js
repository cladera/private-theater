'use strict';

angular.module('privateTheaterApp')
  .controller('AdminReportsCtrl', ['$scope', '$rootScope', 'MediaError', function ($scope, $rootScope, MediaError) {
    $scope.statusFilter = 'open';
    if(!$rootScope.reports){
      $rootScope.reports = MediaError.query();
    }
    $scope.reports = $rootScope.reports;
    $scope.updateStatus = function (report, status){
      //TODO: Restore previous status if update fails
      // var prevStatus = report.status;
      report.status = status;
      report.$update();
    };
    $scope.isFilterActive = function(filter){
      return ($scope.statusFilter === filter);
    };
  }]);
