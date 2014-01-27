'use strict';

angular.module('privateTheaterApp')
  .controller('MovieCtrl', ['$scope', '$sce', '$routeParams', 'Movie', function ($scope, $sce, $routeParams, Movie) {
    $scope.media = {
      src: '',
      height: 480,
      width: 854
    };
    $scope.movie = Movie.get({movieId: $routeParams.movieId}, function(movie){
      if(movie.medias !== undefined || movie.medias.length){
        $scope.media = movie.medias[0];
      }else if(movie.HD !== undefined){
        $scope.media.src = movie.HD;
      }
    });
    $scope.changeMedia = function(index){
      if($scope.movie.medias && index < $scope.movie.medias){
        $scope.media = $scope.movie.medias[index];
      }
    };
  }]);
