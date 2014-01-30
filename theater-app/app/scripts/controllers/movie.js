'use strict';

angular.module('privateTheaterApp')
  .controller('MovieCtrl', ['$scope', '$sce', '$routeParams', '$location', 'Movie', function ($scope, $sce, $routeParams, $location, Movie) {
    var mediaIndex = $routeParams.mediaIndex || 0;
    $scope.media = {
      src: ''
    };
    $scope.movie = Movie.get({movieId: $routeParams.movieId}, function(movie){
      if($scope.movie.medias && $scope.movie.medias.length > 0){
        $scope.media = movie.medias[mediaIndex];
      }
    });
  }]);
