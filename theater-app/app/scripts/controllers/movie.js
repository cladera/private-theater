'use strict';

angular.module('privateTheaterApp')
  .controller('MovieCtrl', ['$scope', '$http', '$routeParams', '$sce', 'Movie', function ($scope, $http, $roteParams, $sce, Movie) {
    $scope.movie = Movie.get({movieId: $roteParams.movieId}, function(movie){
      $scope.url = $sce.trustAsResourceUrl(movie.urls.fullHD);
    });
  }]);
