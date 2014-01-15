'use strict';

angular.module('privateTheaterApp')
  .factory('User', ['$resource',function ($resource) {
    return $resource('/user/session.json');
  }]);
