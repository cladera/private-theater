'use strict';

angular.module('privateTheaterApp')
  .controller('ProfileCtrl', ['$scope','User','Auth','notifications', function ($scope, User, Auth, notifications) {
    $scope.update = function(){
      if($scope.me.role instanceof Object){
        $scope.me.role = $scope.me.role.title.toUpperCase();
      }
      User.update($scope.me, function(){
        Auth.updateUser($scope.me);
        notifications.success('Profile updated successfully!');
      });
    };
    $scope.me = User.me();
  }]);