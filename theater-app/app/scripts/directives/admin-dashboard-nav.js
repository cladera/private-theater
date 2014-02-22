'use strict';

angular.module('privateTheaterApp')
  .directive('adminDashboardNav', function () {
    return {
      templateUrl: 'views/directives/admin-dashboard-nav.html',
      restrict: 'E',
      link: function postLink() {
      }
    };
  });
