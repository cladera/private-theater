'use strict';

describe('Controller: MainCtrl', function () {
  // load the controller's module
  beforeEach(module('privateTheaterApp'));

  var MainCtrl,
    scope,
    httpBackend;

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
    expect(scope.movies.length).toBe(0);

    httpBackend.flush();
    expect(scope.movies.length).toBe(1);
  });
});