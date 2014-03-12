'use strict';

angular.module('privateTheaterApp')
  .directive('movie', ['Movie', function (Movie) {
    return {
      templateUrl: 'views/directives/movie.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        attrs.$observe('movieId', function(){
          if(attrs.movieId !== ''){
            scope.movie = Movie.get({movieId: attrs.movieId, byId: 'true'});
          }
        });
      }
    };
  }]);
