'use strict';

describe('Controller: NewmovieCtrl', function () {

  // load the controller's module
  beforeEach(module('privateTheaterApp'));

  var NewmovieCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewmovieCtrl = $controller('NewmovieCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
