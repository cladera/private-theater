'use strict';

angular.module('privateTheaterApp')
  .factory('MediaError', ['$resource', function ($resource) {
    return $resource('/reports/:reportId',
      {reportId: '@_id'},{
      save: {
        method: 'POST',
        params: {reportId: 'new'}
      },
      query: {
        method: 'GET',
        params: {reportId: 'all'},
        isArray: true
      },
      update: {
        method: 'PUT'
      }
    });
  }]);
