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

    return directive;

    /** @ngInject */
    function doorsCanvasCtrl(fabric, $scope) {
      init();

      function init(){
        var rect;

        $scope.canvas            = new fabric.Canvas('canvas');
        $scope.changeCanvasColor = changeCanvasColor;
        $scope.uploadImage       = uploadImage;

        rect = new fabric.Rect({
          top : 100,
          left : 100,
          width : 50,
          height : 50,
          fill : 'blue'
        });

        $scope.canvas.add(rect);
      }

      function renderCanvas(canvas){
        return canvas.renderAll.bind(canvas);
      }

      function changeCanvasColor(color) {
        if (color) {
          $scope.canvas.setBackgroundColor(color, renderCanvas($scope.canvas));
        }
      }

      function uploadImage(uploadedImg) {
        if (uploadedImg) {
          var imgObj = new Image();
          imgObj.src = uploadedImg;

          var image = new fabric.Image(imgObj);
          image.set({
                left: 0,
                top: 0,
                padding: 10,
                cornersize: 10
          });

          $scope.canvas.add(image);
          $scope.canvas.sendToBack(image);
        }
      }
    }
  }
})();