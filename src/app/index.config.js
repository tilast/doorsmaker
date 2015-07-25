(function() {
  'use strict';

  angular
    .module('doorsProject')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
