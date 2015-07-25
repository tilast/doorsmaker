(function() {
  'use strict';

  angular
    .module('doorsProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, fabric) {

    $scope.canvas = new fabric.Canvas('canvas');

    $scope.rect = new fabric.Rect({
            top : 100,
            left : 100,
            width : 50,
            height : 50,
            fill : 'blue'
        });

    $scope.canvas.add($scope.rect);
  }
})();
