'use strict';

angular.module('privateTheaterApp')
  .controller('EditmovieCtrl', ['$scope', '$routeParams', '$location', 'Movie', function ($scope, $routeParams, $location, Movie) {
    $scope.movie = Movie.get({movieId: $routeParams.movieId});

    $scope.save = function(){
      Movie.update({movieId: $scope.movie.id}, $scope.movie);
    };
  }]);
