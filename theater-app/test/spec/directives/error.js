'use strict';

describe('Directive: error', function () {

  // load the directive's module
  beforeEach(module('privateTheaterApp'));

  var scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    //TODO: error directive test
    expect(true).toBe(true);
  }));
});
