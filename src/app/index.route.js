(function() {
  'use strict';

  angular
    .module('simpleMessaging')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('message', {
        url: '/message/create',
        templateUrl: 'app/message/message-create-edit.html',
        controller: 'MessageCreateEditController',
        controllerAs: 'vm'
      })
      .state('details', {
        url: '/message/details',
        templateUrl: 'app/message/message-details.html',
        controller: 'MessageDetailsController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
