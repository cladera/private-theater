'use strict';

describe('Directive: form', function () {

  // load the directive's module
  beforeEach(module('privateTheaterApp'));

  var element,// jshint ignore:line
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function () {
    //TODO: HForm test
    expect(element).toBe(undefined);
  }));
});
