(function() {
  'use strict';

  angular
  .module('doorsProject')
  .directive('chooseDoorBar', chooseDoorBar);

  /** @ngInject */
  function chooseDoorBar() {
    var directive = {
      restrict: 'E',
      templateUrl: '/choose-door-bar.html',
      controller: chooseDoorBarCtrl,
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function chooseDoorBarCtrl(fabric, $scope, $rootScope, chooseDoorBarService) {
      $scope.addDoor = addDoor;
      $scope.doorsUrls = [];

      var CONSTANTS = {
        default_left : 100,
        default_top : 100
      }

      init();

      function init() {
        $scope.doorsUrls = chooseDoorBarService.getDoors();
      }

      function addDoor(index) {
        var canvasObjects = $rootScope.canvas.getObjects(),
        doors = canvasObjects.filter(function(obj) {
          return obj.name == "door";
        }),
        lastDoor = doors[doors.length - 1],
        doorImg = document.getElementById('door-' + index),
        imgInstance = new fabric.Image(doorImg, {
          left: lastDoor ? lastDoor.left : CONSTANTS.default_left,
          top: lastDoor ? lastDoor.top : CONSTANTS.default_top,
          name: 'door'
        });

        window.currentDoorUrl = $scope.doorsUrls[index].link;

        $rootScope.canvas.remove(lastDoor);
        $rootScope.canvas.add(imgInstance);
      }
    }
  }
})();
