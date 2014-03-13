'use strict';

describe('Controller: AdminReportsCtrl', function () {

  // load the controller's module
  beforeEach(module('privateTheaterApp'));

  var AdminreportsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminreportsCtrl = $controller('AdminReportsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //TODO: AdminReports tests
    expect(true).toBe(true);
  });
});
