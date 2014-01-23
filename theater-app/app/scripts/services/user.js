'use strict';

angular.module('privateTheaterApp')
  .factory('User', ['$resource',function ($resource) {
    return $resource('/users/:userId',{},{
      query: {
        method: 'GET',
        params: {userId: 'all'},
        isArray: true
      },
      save: {
        method: 'POST',
        params: {userId: 'new'}
      }
    });
  }]);
