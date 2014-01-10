'use strict';

angular.module('privateTheaterAdminAppApp')
  .directive('hForm', function () {
    return {
      templateUrl: 'views/h-form.html',
      restrict: 'E',
      transclude: true,
      scope: {
        action: '@',
        method: '@'
      },
      controller: function ($scope) {
        var inputs = $scope.inputs = [];
        this.addHInput = function (hInput){
          inputs.push(hInput);
        };
      }
    };
  })
  .directive('hFormInput', function(){
    return {
      require: '^hForm',
      templateUrl: 'views/h-form-input.html',
      restrict: 'E',
      transclude: true,
      scope: {
        name: '@',
        label: '@',
        type: '@'
      },
      link: function(scope, element, attrs, hFormCtrl){
        attrs = attrs || [];
        hFormCtrl.addHInput(scope);
      }
    };
  })
  .directive('hFormSelect', function(){
    return {
      require: '^hForm',
      templateUrl: 'views/h-form-select.html',
      restrict: 'E',
      transclude: true,
      scope: {
        name: '@',
        label: '@'
      },
      link: function(scope, element, attrs, hFormCtrl){
        attrs = attrs || [];
        hFormCtrl.addHInput(scope);
      }
    };
  });
