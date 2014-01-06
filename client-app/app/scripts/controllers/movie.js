'use strict';

angular.module('privateTheaterApp')
  .controller('MovieCtrl', ['$scope', '$http', '$routeParams', '$sce', function ($scope, $http, $roteParams, $sce) {
    $http.get('data/'+$roteParams.movieId+'.json').success(function(data){
      $scope.movie = data;
      console.log(data);
      $scope.url = $sce.trustAsResourceUrl(data.urls.fullHD);
    });
  }]);
