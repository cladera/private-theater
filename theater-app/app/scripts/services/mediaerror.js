'use strict';

angular.module('privateTheaterApp')
  .factory('MediaError', ['$resource', function ($resource) {
    return $resource('movies/media/:mediaId/reports',
      { mediaId: '@media'},{
      save: {
        method: 'POST'
      }
    });
  }]);
