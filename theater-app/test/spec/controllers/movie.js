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
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope, $routeParams) {
    $httpBackend = _$httpBackend_;

    $httpBackend.expectGET('movies/xyz')
      .respond({name: 'movie XYZ', urls: { fullHD: 'movie.mp4'}});

    $routeParams.movieId = 'xyz';
    scope = $rootScope.$new();
    MovieCtrl = $controller('MovieCtrl', {
      $scope: scope
    });
  }));

  it('should load Movie info', function () {
    console.log(scope.movie);
    expect(scope.movie).toEqualData({});

    $httpBackend.flush();

    expect(scope.movie).toEqualData({name: 'movie XYZ', urls: { fullHD: 'movie.mp4'}});
  });
});
