'use strict';

angular.module('meanTestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('hogehoges', {
        url: '/hogehoges',
        templateUrl: 'app/hogehoges/hogehoges.html',
        controller: 'HogehogesCtrl'
      });
  });
