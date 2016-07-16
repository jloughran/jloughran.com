angular
  .module('homeApp', ['ngRoute'])
  .config(routeConfig)
  .controller('HomeController', SinglePageApp);

SinglePageApp.$inject = ['$scope', '$location'];

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

function SinglePageApp($scope, $location) {
  var vm = this;

  vm.menuLinks = [
    {
      url: '#/about',
      text: 'About',
    },
    {
      url: '#/projects',
      text: 'Projects',
    },
    {
      url: '#/contact',
      text: 'Contact',
    }
  ];

  function setActiveLink() {
    const path = '#' + $location.path();
    vm.menuLinks.forEach(function (link) {
      if (link.url === path) {
        link.style = 'menu-active';
      } else {
        link.style = 'menu-inactive';
      }
    });
  }

  setActiveLink();
}
