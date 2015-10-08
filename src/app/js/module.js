(function(ng) {
  'use strict';

  // Module dependencies
  var dependencies = [
    'ui.router'
  ];

  ng.module('sr.events', dependencies)
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('overview', {
          url: '/',
          views: {
            overview: {
              templateUrl: 'overview/templates/overview.html'
            }
          }
        });
    });
})(angular);
