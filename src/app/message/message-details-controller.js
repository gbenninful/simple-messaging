(function() {
  'use strict';

  angular
    .module('simpleMessaging')
    .controller('MessageDetailsController', MessageDetailsController);

  /** @ngInject */
  function MessageDetailsController ($log) {
    //var vm = this;

    $log.log('Inside MessageDetailsController...');

    /*vm.message = {
      title: '',
      details: '',
      sentBy: '',
      sendMessage: function () {
        $log.log('Inside sendMessage().');
      }
    };

    vm.required = true;*/


  }
})();
