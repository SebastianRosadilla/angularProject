(function (ng) {
  'use strict';

  // Module dependencies
  var dependencies = [
    'ui.router',
    'sl.docs.sidebar',
    'sl.docs',
  ];

  ng.module('sl.docs.main', dependencies)
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('main', {
          url: '/main',
          views: {
            app: {
              templateUrl: 'main/templates/main.html',
              controller: 'MainCtrl as main'
            },
            sidebar: {
              templateUrl: 'sidebar/templates/sidebar.html',
              controller: 'MainCtrl as sidebar'
            }
          }
        })
    })
})(angular);
