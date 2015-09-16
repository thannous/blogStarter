'use strict';

// Declare app level module which depends on views, and components
angular.module('blog', [
  'ngRoute',
  'blog.viewListArticle',
  'blog.viewContact',
  'blog.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/article'});
}]);

