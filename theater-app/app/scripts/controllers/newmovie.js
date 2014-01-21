'use strict';

angular.module('privateTheaterApp')
  .controller('NewmovieCtrl', ['$scope', 'Movie',function ($scope, Movie) {
    $scope.movie = new Movie();
    $scope.submit = function(success, err){
      console.log('Sending Movie', $scope.movie);
    };
  }]);
