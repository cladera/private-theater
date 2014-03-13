'use strict';

describe('Directive: movie', function () {

  // load the directive's module
  beforeEach(module('privateTheaterApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<movie></movie>');
    element = $compile(element)(scope);
    //TODO: Movie directive tests
    expect(true).toBe(true);
  }));
});
