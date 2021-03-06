'use strict';

angular.module('privateTheaterApp')
  .directive('error', function () {
    return {
      template: '<div class="alert alert-danger"></div>',
      restrict: 'E',
      transclude: true,
      replace: true,
      link: function (scope, element) {
        var updateCSS = function () {
          if(length <= 0) {
            element.css('display', 'none');
          }else {
            element.css('display', prevDisp);
          }
        };
        var length = element.text().length
          , prevDisp = element.css('display');
        updateCSS();

        scope.$watch(function(){
          return element.text().length;
        }, function(current){
          length = current;
          updateCSS();
        });
      }
    };
  });
