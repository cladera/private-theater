'use strict';

angular.module('privateTheaterApp')
  .controller('EditmovieCtrl', ['$scope', '$routeParams', '$location', 'Movie', function ($scope, $routeParams, $location, Movie) {
    $scope.movie = Movie.get({movieId: $routeParams.movieId});
    $scope.newMedia = {
      quality: '720p'
    };
    $scope.save = function(){
      Movie.update({movieId: $scope.movie.id}, $scope.movie);
    };

    $scope.createMedia = function(){
      $scope.movie.medias.push(Object.create($scope.newMedia));
      $scope.newMedia = {
        quality: '720p'
      };

    }
  }]);
