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
          { url: 'assets/images/door_1.jpg', link: 'http://google.com/' },
          { url: 'assets/images/door_2.jpg', link: 'http://google.com/' },
          { url: 'assets/images/door_3.jpg', link: 'http://google.com/' },
          { url: 'assets/images/door_4.jpg', link: 'http://google.com/' },
          { url: 'assets/images/door_5.jpg', link: 'http://google.com/' },
          { url: 'assets/images/door_6.jpg', link: 'http://google.com/' }
        ];
        // return [].slice.call(document.querySelectorAll(".js-door"))
        //   .map(function(doorImg){
        //     return { url: doorImg.src, link: doorImg.parentNode.href };
        //   });
      }
    };

    return service;
  }
})();
