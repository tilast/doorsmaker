(function() {
  'use strict';

  angular
  .module('doorsProject')
  .factory('chooseDoorBarService', chooseDoorBarService);

  /** @ngInject */
  function chooseDoorBarService() {
    var service = {
      getDoors : function(){
        var doorsImages = document.querySelectorAll('.js-door');

        return doorsImages.map(function(doorImg){
          return { url: doorImg.src };
        });
      }
    };

    return service;
  }
})();
