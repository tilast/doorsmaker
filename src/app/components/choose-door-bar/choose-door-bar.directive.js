(function() {
  'use strict';

  angular
  .module('doorsProject')
  .directive('chooseDoorBar', chooseDoorBar);

  /** @ngInject */
  function chooseDoorBar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/choose-door-bar/choose-door-bar.html',
      controller: chooseDoorBarCtrl,
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function chooseDoorBarCtrl(fabric, $scope, $rootScope) {

      $scope.addRect = addRect;

      function addRect(color) {
        var canvasObjects   = $rootScope.canvas.getObjects(),
        lastCoordinates = {},
        rect;

        for (var i = 0; i < canvasObjects.length; i++) {
          if (canvasObjects[i].name == "rectangle") {
            lastCoordinates.left = canvasObjects[i].left;
            lastCoordinates.top  = canvasObjects[i].top;
            $rootScope.canvas.remove(canvasObjects[i]);
          }
        }

        rect = new fabric.Rect({
          top : lastCoordinates.top,
          left : lastCoordinates.left,
          width : 50,
          height : 50,
          name : 'rectangle',
          fill : color
        });
        
        $rootScope.canvas.add(rect);
      }
    }
  }
})();
