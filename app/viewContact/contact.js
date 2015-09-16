(function() {
        'use strict';

        angular.module('blog.viewContact', ['ngRoute'])

            .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/contact', {
                    templateUrl: 'viewContact/contact.html',
                    controller: 'ContactCtrl'
                });
            }])

            .controller('ContactCtrl', ContactCtrl);


        function ContactCtrl() {


        }
    }

)();


