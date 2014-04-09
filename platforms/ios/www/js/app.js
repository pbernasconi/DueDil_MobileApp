
angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    .state('tab.search', {
      url: '/search',
      views: {
        'search-tab': {
          templateUrl: 'templates/search.html',
          controller: 'DueDilCtrl'
        }
      }
    })

    .state('tab.search-detail', {
      url: '/search/:idNumber',
      views: {
        'search-tab': {
          templateUrl: 'templates/search-detail.html',
          controller: 'DueDilDetailCtrl'
        }
      }
    })

    .state('tab.about', {
      url: '/about',
      views: {
        'about-tab': {
          templateUrl: 'templates/about.html'
        }
      }
    });

  $urlRouterProvider.otherwise('/tab/search');

});

