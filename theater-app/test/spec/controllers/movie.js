'use strict';

describe('Controller: MovieCtrl', function () {
  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });
  // load the controller's module
  beforeEach(module('privateTheaterApp'));

  var MovieCtrl,
    scope,
    $httpBackend,
    xyzMovie = function(){
      return {
        id: 'xyz',
        name: 'movie XYZ',
        medias: [{
          src: 'http://acme.com/media.mp4'
        }]
      };
    };

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope, $routeParams) {
    $httpBackend = _$httpBackend_;

    $httpBackend.expectGET('movies/xyz')
      .respond(xyzMovie());

    $routeParams.movieId = 'xyz';
    scope = $rootScope.$new();
    MovieCtrl = $controller('MovieCtrl', {
      $scope: scope
    });
  }));

  it('should fetch Movie detail', function () {

    expect(scope.movie).toEqualData({});

    $httpBackend.flush();

    expect(scope.movie).toEqualData(xyzMovie());
  });

  it('should select first media if route params is not defined', function(){
    $httpBackend.flush();
    expect(scope.media).toEqualData(xyzMovie().medias[0]);
  });
});

describe('Controller: MovieCtrl selecting media', function () {
  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });
  // load the controller's module
  beforeEach(module('privateTheaterApp'));

  var MovieCtrl,
    scope,
    $httpBackend,
    xyzMovie = function(){
      return {
        id: 'xyz',
        name: 'movie XYZ',
        medias: [
          {
            src: 'http://acme.com/media.mp4'
          },
          {
            src: 'http://acme.com/media2.mp4'
          }
        ]
      };
    };

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope, $routeParams) {
    $httpBackend = _$httpBackend_;

    $httpBackend.expectGET('movies/xyz')
      .respond(xyzMovie());

    $routeParams.movieId = 'xyz';
    $routeParams.mediaIndex = 1;
    scope = $rootScope.$new();
    MovieCtrl = $controller('MovieCtrl', {
      $scope: scope
    });
  }));

  it('should select media in position 1', function(){
    $httpBackend.flush();
    expect(scope.media).toEqualData(xyzMovie().medias[1]);
  });
});
