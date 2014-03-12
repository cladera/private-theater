'use strict';

describe('Controller: AdminreportsCtrl', function () {

  // load the controller's module
  beforeEach(module('privateTheaterApp'));

  var AdminreportsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminreportsCtrl = $controller('AdminreportsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
