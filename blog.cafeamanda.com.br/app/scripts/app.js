'use strict';

angular.module('blogApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    // Home
    .state('app', {
      url:'/',
      views: {
        'header': {
          templateUrl: 'app/templates/header.html'
        },
        'content': {
          templateUrl: 'app/partials/home.html',
          controller: 'PageCtrl'
        },
        'sidebar': {
          templateUrl: 'app/templates/sidebar.html'
        },
        'footer': {
          templateUrl: 'app/templates/footer.html'
        }
      }
    })

    .state('app.about', {
      url: 'about',
      views: {
        'content@': {
          templateUrl: 'app/partials/about.html',
          controller: 'PageCtrl'
        }
      }
    })

    .state('app.post01', {
      url:'pensando-o-seu-site',
      views: {
        'content@': {
          templateUrl: 'app/partials/blog/post01.html'
        }
      }
    })

    .state('app.post02', {
      url:'7-ideias-para-engajar-seus-usuarios',
      views: {
        'content@': {
          templateUrl: 'app/partials/blog/post02.html'
        }
      }
    })

    .state('app.post03', {
      url:'sobre-o-sobre-nos',
      views: {
        'content@': {
          templateUrl: 'app/partials/blog/post03.html'
        }
      }
    })

    $urlRouterProvider.otherwise('/');

});
