'use strict';

angular.module('blogApp')
/**
* Controls the Blog
*/
.controller('BlogCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
console.log("Blog Controller reporting for duty.");
}])

/**
* Controls all other Pages
*/
.controller('PageCtrl', ['$scope', function ($scope) {
  console.log("Page Controller reporting for duty.");


}]);
