(function() {
  'use strict';

  angular
  .module('doorsProject')
  .factory('mainService', mainService);

  /** @ngInject */
  function mainService($location) {
    var service = {
      handlePicture : function(image){
        var w = window.open('about:blank','image from canvas');
        w.document.write("<img src='" + image + "' alt='from canvas'/>");
      }
    };

    return service;
  }
})();
