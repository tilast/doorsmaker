(function() {
  'use strict';

  angular
    .module('doorsProject')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
