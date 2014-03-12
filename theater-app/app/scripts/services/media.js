'use strict';

angular.module('privateTheaterApp')
  .factory('Media', ['$resource', function ($resource) {
    return $resource('medias/:mediaId', {mediaId: '@id'},{
      query: {
        method: 'GET',
        params: {
          mediaId: 'all'
        },
        isArray: true
      },
      save: {
        method: 'POST',
        params: {mediaId: 'new'}
      }
    });
  }]);
