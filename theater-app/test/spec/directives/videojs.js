'use strict';

describe('Directive: videojs', function () {

  // load the directive's module
  beforeEach(module('privateTheaterApp'));

  var scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function () {
    //TODO: videojs test unit
    expect(true).toBe(true);
  }));
});