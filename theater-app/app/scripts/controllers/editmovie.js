'use strict';

angular.module('privateTheaterApp')
  .controller('EditmovieCtrl', ['$scope', '$routeParams', '$location', 'Movie', 'Media', function ($scope, $routeParams, $location, Movie, Media) {
    $scope.movie = Movie.get({movieId: $routeParams.movieId});
    $scope.newMedia = new Media();
    $scope.save = function(){
      Movie.update({movieId: $scope.movie.id}, $scope.movie);
    };

    $scope.createMedia = function(){
      $scope.newMedia.$save({movieId: $scope.movie.id, mediaId: 'new'}, function(media, resp){
        if(!media){
          console.log('Error!', resp);
        }else {
          $scope.movie.medias.push(media);
          $scope.newMedia = new Media();
          $scope.newMedia.quality = '720p';
        }

      });
    };
  }]);
