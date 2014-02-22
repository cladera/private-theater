'use strict';

angular.module('privateTheaterApp')
  .factory('MediaError', ['$resource', function ($resource) {
    return $resource('movies/reports/:reportId',
      {},{
      save: {
        method: 'POST',
        params: {reportId: 'new'}
      },
      query: {
        method: 'GET',
        params: {reportId: 'all'},
        isArray: true
      }
    });
  }]);
