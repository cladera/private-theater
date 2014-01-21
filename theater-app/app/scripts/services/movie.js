'use strict';

angular.module('privateTheaterApp')
  .factory('Movie', ['$resource', function ($resource) {
    return $resource('movies/:movieId',{},{
      query: {
        method: 'GET',
        params: {movieId: 'query'},
        isArray: true
      },
      save: {
        method: 'POST',
        params: {movieId: 'new'}
      }
    });
  }]);