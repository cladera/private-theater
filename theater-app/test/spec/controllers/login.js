'use strict';

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('privateTheaterApp'));

  var LoginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope
    });
  }));

  it('login should be a function of scope', function () {
    expect(typeof scope.login).toBe('function');
  });
});
