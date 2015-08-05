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

        $rootScope.canvas        = new fabric.Canvas('canvas');
        $rootScope.renderCanvas  = renderCanvas;
        $scope.changeCanvasColor = changeCanvasColor;
        $scope.uploadImage       = uploadImage;

        fabric.Image.fromURL("assets/images/door_white.jpg", function(oImg) {
          oImg.scaleToWidth($rootScope.canvas.getWidth());
          oImg.name = "background";
          $rootScope.canvas.add(oImg);
        });

      }

      function renderCanvas(canvas){
        return canvas.renderAll.bind(canvas);
      }

      function changeCanvasColor(colorImage) {

        var lastBackground = deleteBackground('background'),
        imgObj = new Image();

        if (colorImage) {

          if (lastBackground) {
            $rootScope.canvas.remove(lastBackground);
          }

          fabric.Image.fromURL(colorImage, function(oImg) {
            oImg.scaleToWidth($rootScope.canvas.getWidth());
            oImg.name = "background";
            $rootScope.canvas.add(oImg);
          });

          document.getElementsByClassName('js-image')[0].value = "";
        }
      }

      function deleteBackground(pattern) {
        var objects = $rootScope.canvas.getObjects().filter(function(obj){
          return obj.name === pattern;
        });

        return objects[objects.length - 1];
      }

      function uploadImage(uploadedImg) {
        $('.preloader').show();

        var imgObj = new Image(),
        lastBackground = deleteBackground("background");
        
        imgObj.src = uploadedImg;

        $(imgObj).on('load', function(){
          $('.preloader').hide();

          return false;
        });

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

        $rootScope.canvas.add(image);
        $rootScope.canvas.sendToBack(image);
      }
    }
  }
})();
