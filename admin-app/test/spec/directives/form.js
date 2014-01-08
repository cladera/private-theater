'use strict';

describe('Directive: form', function () {

  // load the directive's module
  beforeEach(module('privateTheaterAdminAppApp'));

  var element,
    scope;
  console.log(element);
  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('TODO: should make hidden element visible', inject(function () {
    //TODO: Directive test
    expect(true).toBe(true);
  }));
});
