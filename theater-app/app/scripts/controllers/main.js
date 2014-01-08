'use strict';

angular.module('privateTheaterApp')
  .controller('MainCtrl', ['$scope', '$http', 'Movie', function ($scope, $http, Movie) {
    $scope.movies = Movie.query();
    $scope.orderProp = 'year';
  }]);
