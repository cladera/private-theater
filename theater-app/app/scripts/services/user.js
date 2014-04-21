'use strict';

angular.module('privateTheaterApp')
  .factory('User', ['$resource',function ($resource) {
    return $resource('/users/:userId', {userId: '@_id'},{
      query: {
        method: 'GET',
        params: {userId: 'all'},
        isArray: true
      },
      save: {
        method: 'POST',
        params: {userId: 'new'}
      },
      me: {
        method: 'GET',
        params: {userId: 'me'}
      },
      update: {
        method: 'PUT'
      }
    });
  }]);
