(function() {
  'use strict';

  angular
  .module('doorsProject')
  .factory('chooseDoorBarService', chooseDoorBarService);

  /** @ngInject */
  function chooseDoorBarService() {
    var service = {
      getDoors : function(){
        return document.querySelectorAll('.js-door')
          .map(function(doorImg){
            return { url: doorImg.src };
          });
      }
    };

    return service;
  }
})();
