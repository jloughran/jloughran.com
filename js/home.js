(function () {
  'use strict';
  
  angular
    .module('homeApp', [])
    .controller('HomeController', SinglePageApp);
  
  SinglePageApp.$inject = ['$scope'];
  
  function SinglePageApp($scope) {
    var vm = this;
    
    $scope.message = 'Testing 123';
  }
})();