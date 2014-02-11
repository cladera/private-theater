'use strict';

angular.module('privateTheaterApp')
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
      require: ['^hForm', '?ngModel'],
      templateUrl: 'views/h-form-input.html',
      restrict: 'E',
      transclude: true,
      scope: {
        name: '@',
        label: '@',
        type: '@'
      },
      link: function(scope, element, attrs, controllers){
        var hFormCtrl = controllers[0]
          , ngModel   = controllers[1];

        if(ngModel) {
          var input = element.find('input');
          var read = function (){
            var value = input.val();
            ngModel.$setViewValue(value);
          };
          ngModel.$render = function(){
            input.val(ngModel.$viewValue || '');
          };
          input.on('blur keyup change', function(){
            scope.$apply(read);
          });
          read();
        }
        attrs = attrs || [];
        hFormCtrl.addHInput(scope);
      }
    };
  })
  .directive('hFormSelect', function(){
    return {
      require: ['^hForm','?ngModel'],
      templateUrl: 'views/h-form-select.html',
      restrict: 'E',
      transclude: true,
      scope: {
        name: '@',
        label: '@'
      },
      link: function(scope, element, attrs, controllers){
        var hFormCtrl = controllers[0]
          , ngModel   = controllers[1];
        if(ngModel) {
          var input = element.find('select');
          var read = function (){
            var value = input.val();
            ngModel.$setViewValue(value);
          };
          ngModel.$render = function(){
            input.val(ngModel.$viewValue || '');
          };
          input.on('blur keyup change', function(){
            scope.$apply(read);
          });
          read();
        }
        attrs = attrs || [];
        hFormCtrl.addHInput(scope);
      }
    };
  })
  .directive('hFormRadio', function(){
    return {
      require: ['^hForm', '?ngModel'],
      templateUrl: 'views/h-form-radio.html',
      restrict: 'E',
      transclude: true,
      scope: {
        name: '@',
        label: '@',
        type: '@',
        value: '@'
      },
      link: function(scope, element, attrs, controllers){
        var hFormCtrl = controllers[0]
          , ngModel   = controllers[1];

        if(ngModel) {
          var input = element.find('input');
          var read = function (){
            var value = input.val();
            ngModel.$setViewValue(value);
          };
          ngModel.$render = function(){
            input.val(ngModel.$viewValue || '');
          };
          input.on('blur keyup change', function(){
            scope.$apply(read);
          });
          read();
        }
        attrs = attrs || [];
        hFormCtrl.addHInput(scope);
      }
    };
  });
