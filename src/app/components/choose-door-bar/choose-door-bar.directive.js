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
        var canvasObjects = $rootScope.canvas.getObjects(),
        rects = canvasObjects.filter(function(obj) {
          return obj.name == "rectangle";
        }),
        lastRect = rects[rects.length - 1],
        rect;

        rect = new fabric.Rect({
          top : lastRect.top,
          left : lastRect.left,
          width : 50,
          height : 50,
          name : 'rectangle',
          fill : color
        });

        $rootScope.canvas.remove(lastRect);
        $rootScope.canvas.add(rect);
      }


    }
  }
})();
