'use strict';

describe('Controller: NewuserCtrl', function () {

  // load the controller's module
  beforeEach(module('privateTheaterApp'));

  var NewuserCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewuserCtrl = $controller('NewuserCtrl', {
      $scope: scope
    });
  }));

  it('should attach a user submit function', function () {
    expect(typeof scope.submit).toBe('function');
  });
});
