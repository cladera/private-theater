'use strict';

angular.module('privateTheaterApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'views/directives/navbar.html',
      restrict: 'E',
      transclude: true
    };
  });
