'use strict';

angular.module('privateTheaterAdminAppApp')
  .directive('hForm', function () {
    return {
      templateUrl: 'views/directives/form/h-form.html',
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
      templateUrl: 'views/directives/form/h-form-input.html',
      restrict: 'E',
      transclude: true,
      scope: {
        name: '@',
        label: '@',
        type: '@'
      },
      link: function(scope, element, attrs, hFormCtrl){
        console.log(element+attrs);
        hFormCtrl.addHInput(scope);
      }
    };
  });
