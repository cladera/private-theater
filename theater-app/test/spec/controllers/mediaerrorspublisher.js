'use strict';

describe('Controller: MediaErrorsPublisherCtrl', function () {

  // load the controller's module
  beforeEach(module('privateTheaterApp'));

  var MediaerrorspublisherCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MediaerrorspublisherCtrl = $controller('MediaErrorsPublisherCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //TODO: MediaErrorPublisher tests
    expect(true).toBe(true);
  });
});
