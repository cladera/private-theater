'use strict';

angular.module('privateTheaterApp')
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('data/movies.json').success(function(data){
      $scope.movies = data;
      $scope.orderProp = 'year';
    });
  }]);
