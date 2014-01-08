'use strict';

describe('Controller: MovieCtrl', function () {

  // load the controller's module
  beforeEach(module('privateTheaterApp'));

  var MovieCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope, $routeParams) {
    $httpBackend = _$httpBackend_;

    $httpBackend.expectGET('data/xyz.json')
      .respond({name: 'movie XYZ', urls: { fullHD: 'movie.mp4gru'}});

    $routeParams.movieId = 'xyz';
    scope = $rootScope.$new();
    MovieCtrl = $controller('MovieCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.movie).toBeUndefined();

    $httpBackend.flush();

    expect(scope.movie).toEqual({name: 'movie XYZ', urls: { fullHD: 'movie.mp4gru'}});
  });
});
