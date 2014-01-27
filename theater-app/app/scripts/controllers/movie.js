'use strict';

angular.module('privateTheaterApp')
  .controller('MovieCtrl', ['$scope', '$sce', '$routeParams', '$location', 'Movie', function ($scope, $sce, $routeParams, $location, Movie) {

    $scope.media = {
      src: ''
    };
    $scope.movie = Movie.get({movieId: $routeParams.movieId}, function(movie){
      if($scope.movie.medias && $scope.movie.medias.length > 0){
        $scope.media = movie.medias[0];
      }
    });
    $scope.changeMedia = function(index){
      if($scope.movie.medias && index < $scope.movie.medias){
        $scope.media = $scope.movie.medias[index];
      }
    };

    $scope.deleteMovie = function(){
      Movie.delete({movieId: $routeParams.movieId}, function(){
        $location.path('/');
      });
    };


  }]);
