(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('doorsProject'));

    it('should define more than 5 awesome things', inject(function() {
      expect(5).toBeTruthy();
    }));
  });
})();
