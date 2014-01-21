'use strict';

angular.module('privateTheaterApp')
  .controller('NewmovieCtrl', ['$scope', '$location', 'Movie',function ($scope, $location, Movie) {
    $scope.error = '';
    $scope.movie = new Movie();
    $scope.submit = function(){
      $scope.movie.$save(function(m){
        if(m){
          $location.path('/movies/' + m.id);
        }
      }, function(){
        $scope.error = 'Impossible to save movie';
      });
    };
  }]);
