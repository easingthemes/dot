'use strict';

/**
 * @ngdoc function
 * @name dotApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dotApp
 */
angular.module('dotApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
