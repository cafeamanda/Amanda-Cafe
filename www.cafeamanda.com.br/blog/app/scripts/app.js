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
      url:'primeiros-passos',
      views: {
        'content@': {
          templateUrl: 'app/partials/posts/post01.html'
        }
      }
    })

    .state('app.post02', {
      url:'conquistando-o-usuario',
      views: {
        'content@': {
          templateUrl: 'app/partials/posts/post02.html'
        }
      }
    })

    .state('app.post03', {
      url:'o-sobre-nos',
      views: {
        'content@': {
          templateUrl: 'app/partials/posts/post03.html'
        }
      }
    })

    $urlRouterProvider.otherwise('/');

});
