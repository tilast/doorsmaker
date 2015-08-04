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

        var lastBackground = deleteBackground('background');

        if (color) {
          $rootScope.canvas.remove(lastBackground);
          document.getElementsByClassName('js-image')[0].value = "";
          $rootScope.canvas.setBackgroundColor(color, renderCanvas($rootScope.canvas));
        }
      }

      function deleteBackground(pattern) {
        var objects = $rootScope.canvas.getObjects().filter(function(obj){
          return obj.name === pattern;
        });

        return objects[objects.length - 1];
      }

      function uploadImage(uploadedImg) {
        var imgObj = new Image(),
            lastBackground = deleteBackground("background");
        
        imgObj.src = uploadedImg;

        var image = new fabric.Image(imgObj);
        image.set({
          left: 0,
          top: 0,
          lockUniScaling: true,
          cornersize: 10,
          name: "background"
        });

        image.scaleToWidth($rootScope.canvas.getWidth());

        if (lastBackground) {
          $rootScope.canvas.remove(lastBackground);  
        }
        
        debugger;

        $rootScope.canvas.add(image);
        $rootScope.canvas.sendToBack(image);
      }
    }
  }
})();
