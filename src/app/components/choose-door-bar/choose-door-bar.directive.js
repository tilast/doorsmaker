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
      $scope.addMainDoor = addMainDoor;
      $scope.addSubDoor  = addSubDoor;
      $scope.doorsUrls   = [];
      $scope.currentDoorColors = [];

      var CONSTANTS = {
        default_left : 100,
        default_top : 100
      };

      init();


      function init() {
        $scope.doorsUrls = chooseDoorBarService.getDoors();
        //#TODO: add vertical scroll for .js-choose-door here...
        $(document).ready(function(){
          $('.js-choose-door').scrollbar();
        });
      }

      function addSubDoor(index, subDoors) {
        var canvasObjects = $rootScope.canvas.getObjects(),
        doors = canvasObjects.filter(function(obj) {
          return obj.name == "door";
        }),
        lastDoor = doors[doors.length - 1],
        curDoor  = subDoors[index];

        var imgObj = new Image();
        imgObj.src = curDoor.url;

        var image = new fabric.Image(imgObj);
        image.set({
          scaleX: lastDoor ? lastDoor.getScaleX() : 1,
          scaleY: lastDoor ? lastDoor.getScaleY() : 1,
          left: lastDoor ? lastDoor.left : CONSTANTS.default_left,
          top: lastDoor ? lastDoor.top : CONSTANTS.default_top,
          name: 'door',
          lockRotation: true,
          lockUniScaling: true
        });

        $rootScope.canvas.remove(lastDoor);
        $rootScope.canvas.add(image);
      }

      function addMainDoor(index) {
        var canvasObjects = $rootScope.canvas.getObjects(),
        doors = canvasObjects.filter(function(obj) {
          return obj.name == "door";
        }),
        lastDoor = doors[doors.length - 1],
        curDoor  = $scope.doorsUrls[index];

        var imgObj = new Image();
        imgObj.src = curDoor.url;

        if (lastDoor) {
          console.log(lastDoor.getScaleX());
        }

        var image = new fabric.Image(imgObj);
        image.set({
          scaleX: lastDoor ? lastDoor.getScaleX() : 1,
          scaleY: lastDoor ? lastDoor.getScaleY() : 1,
          left: lastDoor ? lastDoor.left : CONSTANTS.default_left,
          top: lastDoor ? lastDoor.top : CONSTANTS.default_top,
          name: 'door',
          lockRotation: true,
          lockUniScaling: true
        });
        
        
        $scope.currentDoorColors = $scope.doorsUrls[index].images;

        //#TODO: add horizontal scroll for here...

        window.currentDoorUrl = $scope.doorsUrls[index].link;

        $rootScope.canvas.remove(lastDoor);
        $rootScope.canvas.add(image);
      }
    }
  }
})();
