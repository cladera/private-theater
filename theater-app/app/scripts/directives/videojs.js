'use strict';

angular.module('privateTheaterApp')
  .directive('videojs', function () {
    var linker = function (scope, element, attrs){
      attrs.type = attrs.type || 'video/mp4';
      scope.movie.$promise.then(function(){
        var videoid = scope.movie.id;
        attrs.id = 'videojs-' + videoid;
        element.attr('id', attrs.id);

        console.log(scope.movie);
        if(scope.movie.medias !== undefined && scope.movie.medias.length > 0){
          element.attr('src', scope.movie.medias[0].src);
        }else if(scope.movie.HD !== undefined ){
          element.attr('src', scope.movie.HD);
        }else {
          element.attr('src', '');
        }
        angular.forEach(scope.movie.captions, function(caption){
          element.append('<track kind="captions" src="'+caption.url+'" label="'+caption.label+'" srclang="'+caption.lang+'"/>');
        });
        var setup = {
          'techOrder' : ['html5', 'flash'],
          'controls' : true,
          'preload' : 'auto',
          'autoplay' : false,
          'height' : 480,
          'width' : 854
        };
        var player = videojs(attrs.id, setup);
        scope.$on('$destroy', function () {
          element.attr('src', '');
          player.dispose();
        });
      });
    };
    return {
      restrict : 'A',
      link : linker
    };
  });
