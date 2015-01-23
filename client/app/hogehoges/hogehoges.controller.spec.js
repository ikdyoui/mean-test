'use strict';

describe('Controller: HogehogesCtrl', function () {

  // load the controller's module
  beforeEach(module('meanTestApp'));

  var HogehogesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HogehogesCtrl = $controller('HogehogesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
