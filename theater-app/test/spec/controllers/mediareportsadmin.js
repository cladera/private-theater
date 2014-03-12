'use strict';

describe('Controller: MediareportsadminCtrl', function () {

  // load the controller's module
  beforeEach(module('privateTheaterApp'));

  var MediareportsadminCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MediareportsadminCtrl = $controller('MediareportsadminCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
