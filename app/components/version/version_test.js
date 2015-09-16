'use strict';

describe('blog.version module', function() {
  beforeEach(module('blog.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
