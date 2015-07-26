(function() {
  'use strict';

  angular
  .module('doorsProject')
  .directive('fileread', fileread);

  /** @ngInject */
  function fileread() {
    var directive = {
      restrict: 'A',
      scope: {
        fileread: "="
      },
      link: function (scope, element) {
        element.bind("change", function (changeEvent) {
          var reader = new FileReader();
          reader.onload = function (loadEvent) {
            scope.$apply(function () {
              scope.fileread(loadEvent.target.result);
            });
          };
          reader.readAsDataURL(changeEvent.target.files[0]);
        });
      }

    };
    return directive;
  }
})();
