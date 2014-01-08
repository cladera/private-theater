'use strict';

angular.module('privateTheaterApp')
  .factory('Movie', ['$resource', function ($resource) {
    return $resource('data/:movieId.json',{},{
      query: {
        method: 'GET',
        params: {movieId: 'movies'},
        isArray: true
      }
    });
  }]);