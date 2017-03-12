(function() {
  'use strict';

  angular
    .module('simpleMessaging')
    .controller('MessageCreateEditController', MessageCreateEditController);

  /** @ngInject */
  function MessageCreateEditController ($log, $state) {
    var vm = this;

    $log.log('Inside MessageCreateEditController...');

    vm.message = {
      title: '',
      details: '',
      sentBy: '',
      sendMessage: function () {
        $log.log('Inside sendMessage().');
        $state.go('details');
      }
    };

    vm.required = true;


  }
})();
