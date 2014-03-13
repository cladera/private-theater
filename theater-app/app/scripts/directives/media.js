'use strict';

//TODO: Cache
angular.module('privateTheaterApp')
  .directive('media', ['Media',function (Media) {
    return {
      templateUrl: 'views/directives/media.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.media = Media.get({mediaId:attrs.mediaId});
      }
    };
  }]);
