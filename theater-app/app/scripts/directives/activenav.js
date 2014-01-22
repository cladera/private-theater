'use strict';

angular.module('privateTheaterApp')
  .directive('activeNav', ['$location', function ($location) {
    return {
      restrict: 'A',
      link: function (scope, element) {
        var nestedA = element.find('a')[0];
        var path = nestedA.href;
        scope.location = $location;
        scope.$watch('location.absUrl()', function(newPath) {
          if (path === newPath || path === newPath + '/' || path + '/' === newPath) {
            element.addClass('active');
          } else {
            element.removeClass('active');
          }
        });
      }
    };
  }]);
