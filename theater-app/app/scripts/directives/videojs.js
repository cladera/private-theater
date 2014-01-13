'use strict';

angular.module('privateTheaterApp')
  .directive('videojs', function () {
    var linker = function (scope, element, attrs){
      attrs.type = attrs.type || 'video/mp4';

      var setup = {
        'techOrder' : ['html5', 'flash'],
        'controls' : true,
        'preload' : 'auto',
        'autoplay' : false,
        'height' : 480,
        'width' : 854
      };

      var videoid = 107;
      attrs.id = 'videojs' + videoid;
      element.attr('id', attrs.id);

      var player = videojs(attrs.id, setup);
      scope.$on('$destroy', function () {
        element.attr('src', '');
        player.dispose();
      });
    };
    return {
      restrict : 'A',
      link : linker
    };
  });
