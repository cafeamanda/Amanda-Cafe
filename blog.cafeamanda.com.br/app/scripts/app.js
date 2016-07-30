var app = angular.module('tutorialWebApp', ['ngRoute']);

/**
*  Routes
*/
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {
      templateUrl: "partials/home.html", <span class="highlight">
        controller: "PageCtrl"
      </span>
    })

    // Pages
    .when("/about", {
      templateUrl: "partials/about.html",
      <span class="highlight">
        controller: "PageCtrl"
      </span>
    })

    .when("/faq", {
      templateUrl: "partials/faq.html",
      <span class="highlight">
        controller: "PageCtrl"
      </span>
    })

    // Blog
    .when("/blog", {
      templateUrl: "partials/blog.html", <span class="highlight">controller: "BlogCtrl"</span>})

    .when("/blog/post", {
      templateUrl: "partials/blog/blog_item.html",
      <span class="highlight">
        controller: "BlogCtrl"
      </span>
    })

    // Else 404
    .otherwise("/404", {
      templateUrl: "partials/404.html",
      <span class="highlight">
        controller: "PageCtrl"
      </span>
    });

}]);
