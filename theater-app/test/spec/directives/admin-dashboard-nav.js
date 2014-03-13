'use strict';

describe('Directive: adminDashboardNav', function () {

  // load the directive's module
  beforeEach(module('privateTheaterApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<admin-dashboard-nav></admin-dashboard-nav>');
    element = $compile(element)(scope);
    //TODO: Admin Dashboard nav bar tests
    expect(true).toBe(true);
  }));
});
