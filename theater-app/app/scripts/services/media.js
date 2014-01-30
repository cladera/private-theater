'use strict';

angular.module('privateTheaterApp')
  .factory('Media', ['$resource', function ($resource) {
    return $resource('movies/:movieId/medias/:mediaId', {},{
      query: {
        method: 'GET',
        params: {
          mediaId: 'query'
        },
        isArray: true
      }
    });
  }]);
