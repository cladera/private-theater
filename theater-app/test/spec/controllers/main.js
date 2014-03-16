'use strict';

describe('Controller: MainCtrl', function () {
  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });
  // load the controller's module
  beforeEach(module('privateTheaterApp'));

  var MainCtrl,
    scope,
    httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    httpBackend = _$httpBackend_;
    httpBackend.expectGET('movies/query')
      .respond([{
        id: 0,
        name: 'Brave'
      }]);
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should create "movies" model with one movies fetched from xhr', function () {
    expect(scope.movies).toEqualData([]);

    httpBackend.flush();
    expect(scope.movies).toEqualData([{
      id: 0,
      name: 'Brave'
    }]);
  });

  it('should set the default value of orderProp model', function() {
    expect(scope.orderProp).toBe('year');
  });

});