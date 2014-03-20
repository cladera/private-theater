'use strict';

describe('Controller: AdminReportsCtrl', function () {
  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });
  // load the controller's module
  beforeEach(module('privateTheaterApp'));

  var AdminReportsCtrl,
    scope,
    $httpBackend,
    xyzReports = function(){
      return [
        {
          _id: 0,
          body: 'Body 1',
          status: 'open',
          movie: 1
        },
        {
          _id: 1,
          body: 'Body 2',
          status: 'closed',
          movie: 1
        },
        {
          _id: 2,
          body: 'Body 3',
          status: 'discarted',
          movie: 2
        }
      ];
    };

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/reports/all')
      .respond(xyzReports());
    scope = $rootScope.$new();
    AdminReportsCtrl = $controller('AdminReportsCtrl', {
      $scope: scope
    });
  }));

  it('should fetch reports list', function () {
    $httpBackend.flush();
    expect(scope.reports).toEqualData(xyzReports());
  });

  it('should status filter to be open initially', function(){
    $httpBackend.flush();
    expect(scope.statusFilter).toBe('open');
  });

  it('should status classes to be created', function(){
    $httpBackend.flush();
    expect(scope.statusClasses).toEqualData( {
      open: '',
      closed: 'success',
      discarted: 'active'
    });
  });

  it('should status labels to be created', function(){
    $httpBackend.flush();
    expect(scope.statusLabels).toEqualData({
      open: 'label-info',
      closed: 'label-success',
      discarted: 'label-danger'
    });
  });

  /* TODO: Test update report
  it('should save report status', function(){
    console.log(scope.updateStatus);
    $httpBackend.flush();
    var reports = xyzReports(),
      updatedReport = {
        _id: reports[0]._id,
        body: reports[0].body,
        status: 'closed',
        movie: reports[0].movie

      };
    reports[0].$update = function(){

    };
    $httpBackend.expectPUT('reports/'+reports[0]._id).respond(200, updatedReport);
    scope.updateStatus(reports[0], 'closed');
    $httpBackend.flush();
    expect(reports[0]).toEqualData(updatedReport);
  });*/
});
