'use strict';

describe('Service: media', function () {

  // load the service's module
  beforeEach(module('privateTheaterApp'));

  // instantiate service
  var Media;
  beforeEach(inject(function (_Media_) {
    Media = _Media_;
  }));

  it('should do something', function () {
    expect(!!Media).toBe(true);
  });

});
