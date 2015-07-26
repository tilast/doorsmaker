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
      bindToController: true
    };
console.log('doorscanvas');
    return directive;

    /** @ngInject */
    function doorsCanvasCtrl(fabric, $scope, $rootScope) {
      init();

      function init(){
        var rect;

        $rootScope.canvas        = new fabric.Canvas('canvas');
        $rootScope.renderCanvas  = renderCanvas;
        $scope.changeCanvasColor = changeCanvasColor;
        $scope.uploadImage       = uploadImage;

        rect = new fabric.Rect({
          top : 100,
          left : 100,
          width : 50,
          height : 50,
          name: 'rectangle',
          fill : 'blue'
        });

        $rootScope.canvas.add(rect);
      }

      function renderCanvas(canvas){
        return canvas.renderAll.bind(canvas);
      }

      function changeCanvasColor(color) {
        if (color) {
          $rootScope.canvas.setBackgroundColor(color, renderCanvas($rootScope.canvas));
        }
      }

      function uploadImage(uploadedImg) {
        var imgObj = new Image();
        imgObj.src = uploadedImg;

        var image = new fabric.Image(imgObj);
        image.set({
          left: 0,
          top: 0,
          padding: 10,
          cornersize: 10
        });

        $rootScope.canvas.add(image);
        $rootScope.canvas.sendToBack(image);
      }
    }
  }
})();
