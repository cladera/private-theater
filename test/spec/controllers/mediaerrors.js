'use strict';

describe('Controller: MediaerrorsCtrl', function () {

  // load the controller's module
  beforeEach(module('backendApp'));

  var MediaerrorsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MediaerrorsCtrl = $controller('MediaerrorsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
