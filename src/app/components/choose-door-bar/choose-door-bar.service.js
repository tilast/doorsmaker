(function() {
  'use strict';

  angular
  .module('doorsProject')
  .factory('chooseDoorBarService', chooseDoorBarService);

  /** @ngInject */
  function chooseDoorBarService() {
    var service = {
      getDoors : function(){
        return [
          { url: "assets/images/door_1.jpg" },
          { url: "assets/images/door_2.jpg" },
          { url: "assets/images/door_3.jpg" },
          { url: "assets/images/door_4.jpg" },
          { url: "assets/images/door_5.jpg" },
          { url: "assets/images/door_6.jpg" }
        ];
      }
    };

    return service;
  }
})();
