'use strict';

angular.module('privateTheaterApp')
  .controller('AdminCtrl', ['$scope', '$rootScope', 'MediaError',function ($scope, $rootScope, MediaError) {
    if(!$rootScope.reports){
      $rootScope.reports = MediaError.query();
    }
    $scope.reports = $rootScope.reports;
  }]);
