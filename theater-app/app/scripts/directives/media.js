'use strict';

//TODO: Cache
angular.module('privateTheaterApp')
  .directive('media', ['Media', 'Movie',function (Media, Movie) {
    return {
      templateUrl: 'views/directives/media.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.media = Media.get({mediaId:attrs.mediaId});
      }
    };
  }]);
