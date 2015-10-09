(function (ng) {
  'use strict';

  // Module dependencies
  var dependencies = [
    'ui.router',
    'sl.docs.main',
    'ngResource'
  ];

  ng.module('sl.docs', dependencies)
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('overview', {
          url: '/',
          views: {
            app: {
              templateUrl: 'app/templates/overview.html'
            }
          }
        });
    });
})(angular);
