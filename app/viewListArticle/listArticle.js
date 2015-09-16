(function () {
    'use strict';

    angular.module('blog.viewListArticle', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/article', {
                templateUrl: 'viewListArticle/listArticle.html',
                controller: 'ListArticleCtrl'
            });
        }])

        .controller('ListArticleCtrl', [ListArticleCtrl]);

    function ListArticleCtrl() {

    }

})();