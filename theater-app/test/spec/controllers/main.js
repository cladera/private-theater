'use strict';

describe('Controller: MainCtrl', function () {
  var MainCtrl,
    scope,
    httpBackend;

  // load the controller's module
  beforeEach(module('privateTheaterApp'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    httpBackend = _$httpBackend_;
    httpBackend.expectGET('data/movies.json')
      .respond([{
        id: 0,
        name: 'Brave',
        thumbnails: []
      }]);
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should load 1 movie', function () {
    expect(scope.movies).toBeUndefined();
    httpBackend.flush();

    expect(scope.movies.length).toBe(1);
  });
});