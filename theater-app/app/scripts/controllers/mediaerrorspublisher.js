'use strict';

angular.module('privateTheaterApp')
  .controller('MediaErrorsPublisherCtrl', ['$scope', 'MediaError', function ($scope, MediaError) {
    $scope.predefs = [
      'Audio is poor or missing',
      'Incorrect quality',
      'Image freezes continuously',
      'Incorrect language',
      'Captions do not show up',
      'Captions are not in correct language',
      'Captions are not properly synced'
    ];
    if(!$scope.media){
      return;
    }
    $scope.error = new MediaError();
    $scope.error.media = $scope.media._id;
    $scope.submit = function(){
      $scope.error.$save(function(error){
        if(error){
          $scope.error = new MediaError();
          console.log('Media report submitted');
        }else {
          console.err('Error! Media report was not sent');
        }
      }, function(){
        console.error('Error! Media report was not sent');
      });
    };
  }]);
