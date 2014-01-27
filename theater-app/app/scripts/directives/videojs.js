'use strict';

angular.module('privateTheaterApp')
  .directive('videojs', function () {
    var linker = function (scope, element, attrs){
      attrs.type = attrs.type || 'video/mp4';
      scope.movie.$promise.then(function(){
        var videoid = scope.movie.id;
        attrs.id = 'videojs-' + videoid;
        element.attr('id', attrs.id);
        element.attr('src', scope.media.src);

        angular.forEach(scope.movie.captions, function(caption){
          element.append('<track kind="captions" src="'+caption.url+'" label="'+caption.label+'" srclang="'+caption.lang+'"/>');
        });
        var setup = {
          'techOrder' : ['html5', 'flash'],
          'controls' : true,
          'preload' : 'auto',
          'autoplay' : false,
          'height' : scope.media.height || 480,
          'width' : scope.media.width || 854
        };
        var player = videojs(attrs.id, setup);
        scope.$on('$destroy', function () {
          element.attr('src', '');
          player.dispose();
        });

        //Watch media changes
        scope.$watch(function(){
          return scope.media.src;
        }, function(newSrc, oldSrc){
          console.log('SRC changed');
          if(newSrc !== oldSrc){
            player.src([{
              type: 'video/mp4',
              src: newSrc
            }]);
          }
        });
      });
    };
    return {
      restrict : 'A',
      link : linker
    };
  });
