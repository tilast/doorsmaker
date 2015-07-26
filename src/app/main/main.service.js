(function() {
  'use strict';

  angular
  .module('doorsProject')
  .factory('mainService', mainService);

  /** @ngInject */
  function mainService() {
    var service = {
      handlePicture : function(image){
        // To Do Ajax ...
        console.log(image);
      }
    };

    return service;
  }
})();
