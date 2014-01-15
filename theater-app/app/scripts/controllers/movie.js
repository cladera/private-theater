'use strict';

angular.module('privateTheaterApp')
  .controller('MovieCtrl', ['$scope', '$sce', '$routeParams', 'Movie', function ($scope, $sce, $routeParams, Movie) {
    $scope.movie = Movie.get({movieId: $routeParams.movieId}, function(movie){
      $scope.url = $sce.trustAsResourceUrl(movie.HD);
    });
  }]);
