'use strict';

/**
 * @ngdoc function
 * @name dotApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dotApp
 */
angular.module('dotApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
