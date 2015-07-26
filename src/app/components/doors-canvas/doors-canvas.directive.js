(function() {
  'use strict';

  angular
  .module('doorsProject')
  .directive('doorsCanvas', doorsCanvas);

  /** @ngInject */
  function doorsCanvas() {
    var directive = {
      restrict: 'E',
      templateUrl: '/doors-canvas.html',
      controller: doorsCanvasCtrl,
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function doorsCanvasCtrl(fabric, $scope, $rootScope) {
      init();

      function init(){
        var rect;

        $rootScope.canvas        = new fabric.Canvas('canvas', {
          backgroundColor: 'white'
        });
        $rootScope.renderCanvas  = renderCanvas;
        $scope.changeCanvasColor = changeCanvasColor;
        $scope.uploadImage       = uploadImage;

      }

      function renderCanvas(canvas){
        return canvas.renderAll.bind(canvas);
      }

      function changeCanvasColor(color) {
        var canvasObjects = $rootScope.canvas.getObjects().filter(function(obj){
          return obj.name == "background";
        }),
        background = canvasObjects[canvasObjects.length - 1];

        if (color) {
          $rootScope.canvas.remove(background);
          document.getElementsByClassName('js-image')[0].value = "";
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
          cornersize: 10,
          name: 'background'
        });
      }
    }
  }
})();
