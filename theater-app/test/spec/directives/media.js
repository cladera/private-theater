'use strict';

describe('Directive: media', function () {

  // load the directive's module
  beforeEach(module('privateTheaterApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<media></media>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the media directive');
  }));
});
