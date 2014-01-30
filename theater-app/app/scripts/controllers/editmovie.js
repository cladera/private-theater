'use strict';

angular.module('privateTheaterApp')
  .controller('EditmovieCtrl', ['$scope', '$routeParams', '$location', 'Movie', 'Media', function ($scope, $routeParams, $location, Movie, Media) {
    //TODO: Flash errors
    $scope.movie = Movie.get({movieId: $routeParams.movieId});
    $scope.newMedia = new Media();
    $scope.save = function(){
      Movie.update({movieId: $scope.movie.id}, $scope.movie);
    };
    $scope.deleteMovie = function(){
      Movie.delete({movieId: $routeParams.movieId}, function(){
        $location.path('/');
      });
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
    $scope.addCaption = function(){
      if($scope.newMedia.captions === undefined){
        $scope.newMedia.captions = [];
      }
      $scope.newMedia.captions.push({
        locale: {
          label: '',
          code: ''
        },
        src: 'http://'
      });
    };
    $scope.deleteMedia = function(_id){
      Media.delete({movieId: $scope.movie.id, mediaId: _id}, function(){
        for(var index in $scope.movie.medias){
          var m = $scope.movie.medias[index];
          if(m._id === _id){
            $scope.movie.medias.splice(index,1);
            break;
          }
        }
      });
    };
  }]);
