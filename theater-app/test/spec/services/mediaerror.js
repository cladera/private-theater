'use strict';

describe('Service: mediaerror', function () {

  // load the service's module
  beforeEach(module('privateTheaterApp'));

  // instantiate service
  var mediaerror;
  beforeEach(inject(function (_MediaError_) {
    mediaerror = _MediaError_;
  }));

  it('should do something', function () {
    expect(!!mediaerror).toBe(true);
  });

});
