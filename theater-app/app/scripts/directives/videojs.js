'use strict';

angular.module('privateTheaterApp')
  .directive('videojs', function () {
    var linker = function (scope, element, attrs){
      var setup = {
        'techOrder' : ['html5', 'flash'],
        'controls' : true,
        'preload' : 'auto',
        'autoplay' : false,
        'height' : 480,
        'width' : 854
      };
      var loadPlayer = function (media){
        element.attr('src', media.src);
        angular.forEach(media.captions, function(caption){
          element.append('<track kind="captions" src="'+caption.src+'" label="'+caption.locale.label+'" srclang="'+caption.locale.code+'"/>');
        });
        return videojs(attrs.id, setup);
      };
      attrs.type = attrs.type || 'video/mp4';
      scope.movie.$promise.then(function(){
        var videoid = scope.movie.id;
        attrs.id = 'videojs-' + videoid;
        element.attr('id', attrs.id);

        var player = loadPlayer(scope.media);

        //Handle scope destroy for dispose player
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
