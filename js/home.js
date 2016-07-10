(function () {
  'use strict';
  
  angular
    .module('homeApp', ['ngRoute'])
    .config(routeConfig)
    .controller('HomeController', SinglePageApp);
  
  SinglePageApp.$inject = ['$scope'];
  
  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '_pages/home.html',
        controller: 'HomeController'
      })
      .when('/about', {
      templateUrl: '_pages/about.html',
      controller: 'HomeController'
      })
      .when('/projects', {
      templateUrl: '_pages/projects.html',
      controller: 'HomeController'
      })
      .when('/contact', {
      templateUrl: '_pages/contact.html',
      controller: 'HomeController'
      });
  }
  
  function SinglePageApp($scope) {
    var vm = this;
    
    $scope.message = 'Testing 123';
  }
})();