(function() {
  'use strict';

  angular
  .module('doorsProject')
  .factory('chooseDoorBarService', chooseDoorBarService);

  /** @ngInject */
  function chooseDoorBarService() {
    var service = {
      getDoors : function(){
        return [].slice.call(document.querySelectorAll(".js-door"))
          .map(function(doorImg){
            return { url: doorImg.src, link: "http://google.com", id: doorImg.dataset.productId };
          }).reduce(function(acc, item) {
            var toAdd = acc.filter(function(e) { return e.id == item.id; })[0];

            if(toAdd) {
              toAdd.images.push(item);
            } else {
              acc.push({
                id: item.id,
                url: item.url,
                link: item.link,
                images: [item]
              });
            }

            return acc;
          }, []);
      }
    };

    return service;
  }
})();

// (function() {
//   'use strict';

//   angular
//   .module('doorsProject')
//   .factory('chooseDoorBarService', chooseDoorBarService);

//   /** @ngInject */
//   function chooseDoorBarService() {
//     var service = {
//       getDoors : function(){
//         return [].slice.call(document.querySelectorAll(".js-door"))
//           .map(function(doorImg){
//             return { url: doorImg.src, link: doorImg.parentNode.href, id: doorImg.dataset.productId };
//           }).reduce(function(acc, item) {
//             var toAdd = acc.filter(function(e) { return e.id == item.id; })[0];

//             if(toAdd) {
//               toAdd.images.push(item);
//             } else {
//               acc.push({
//                 id: item.id,
//                 url: item.url,
//                 link: item.link,
//                 images: [item]
//               });
//             }

//             return acc;
//           }, []);
//       }
//     };

//     return service;
//   }
// })();

