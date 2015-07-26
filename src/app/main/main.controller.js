(function() {
  'use strict';

  angular
    .module('doorsProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($rootScope, $scope, mainService) {
    $scope.savePicture = function(){
      mainService.handlePicture($rootScope.canvas.toDataURL());
    }
  }
})();
