(function (ng) {
  'use strict';

  // Module dependencies
  var dependencies = [
    'ui.router'
  ];

  ng.module('sl.docs.main', dependencies)
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('main', {
          url: '/main',
          views: {
            main: {
              templateUrl: 'main/templates/main.html',
              controller: 'MainCtrl as main'
            }
          }
        })
    })
})(angular);
