'use strict';

angular.module('privateTheaterApp')
  .controller('MediaErrorsPublisherCtrl', ['$scope', '$modal', 'MediaError', function ($scope, $modal, MediaError) {

    $scope.openReportModal = function(){
      if(!$scope.media){
        return;
      }
      $scope.error = new MediaError();
      $scope.error.media = $scope.media._id;
      $modal.open({
        templateUrl: 'views/movie/report-modal.html',
        controller: ReportModalInstanceCtrl,
        resolve: {
          error: function(){
            return $scope.error;
          }
        }
      });
    };

    //Rerpot Modal Instance
    var ReportModalInstanceCtrl = ['$scope','$modalInstance', 'error', function($scope, $modalInstance, error){
      $scope.predefs = [
        'Audio is poor or missing',
        'Incorrect quality',
        'Image freezes continuously',
        'Incorrect language',
        'Captions do not show up',
        'Captions are not in correct language',
        'Captions are not properly synced'
      ];
      $scope.error = error;
      $scope.ok = function(){
        $scope.error.$save(function(error){
          if(error){
            $modalInstance.close();
          }else {
            console.err('Error! Media report was not sent');
          }
        }, function(){
          console.error('Error! Media report was not sent');
        });
      };
      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    }]
  }]);
