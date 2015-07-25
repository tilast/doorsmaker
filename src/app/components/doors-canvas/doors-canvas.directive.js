(function() {
  'use strict';

  angular
  .module('doorsProject')
  .directive('doorsCanvas', doorsCanvas);

  /** @ngInject */
  function doorsCanvas() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/doors-canvas/doors-canvas.html',
      controller: doorsCanvasCtrl,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function doorsCanvasCtrl(fabric, $scope) {
      init();

      function init(){
        var canvas = $scope.canvas,
        rect;

        canvas = new fabric.Canvas('canvas');

        rect = new fabric.Rect({
          top : 100,
          left : 100,
          width : 50,
          height : 50,
          fill : 'blue'
        });

        canvas.add(rect);
      }
    }

  }

})();
