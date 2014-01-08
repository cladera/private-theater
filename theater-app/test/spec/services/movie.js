'use strict';

describe('Service: Movie', function () {

  // load the service's module
  beforeEach(module('privateTheaterApp'));

  // instantiate service
  var Movie;
  beforeEach(inject(function (_Movie_) {
    Movie = _Movie_;
  }));

  it('should do something', function () {
    expect(!!Movie).toBe(true);
  });

});
