'use strict';

/**
 * @ngdoc object
 * @name core.config
 * @requires ng.$stateProvider
 * @requires ng.$urlRouterProvider
 * @description Defines the routes and other config within the core module
 */
angular
    .module('core')
    .config(['$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            /**
             * @ngdoc event
             * @name core.config.route
             * @eventOf core.config
             * @description
             *
             * Define routes and the associated paths
             *
             * - When the path is `'/'`, route to home
             * */
            /**
 * @ngdoc event
 * @name core.config.route
 * @eventOf core.config
 * @description
 *
 * Define routes and the associated paths
 *
 * - When the state is `'qr'`, route to qr
 *
*/
$stateProvider
    .state('menu', {
        url: '/menu',
        templateUrl: 'modules/core/views/menu.html',
        controller: 'MenuController'
    });
$stateProvider
    .state('qr', {
        url: '/qr',
        templateUrl: 'modules/core/views/qr.html',
        controller: 'QrController'
    }).
state('home', {
                    url: '/',
                    templateUrl: 'modules/core/views/home.html',
                    controller: 'HomeController'
                });
        }
    ]);
