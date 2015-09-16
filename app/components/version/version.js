'use strict';

angular.module('blog.version', [
  'blog.version.interpolate-filter',
  'blog.version.version-directive'
])

.value('version', '0.1');
