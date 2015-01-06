'use strict';

angular.module('dotApp')
  .controller('BlogCtrl', function ($scope, $http, socket) {
    $scope.awesomePosts = [];

    $http.get('/api/posts').success(function(awesomePosts) {
      $scope.awesomePosts = awesomePosts;
      socket.syncUpdates('post', $scope.awesomePosts);
    });

    $scope.addPost = function() {
      if($scope.newPost === '') {
        return;
      }
      $http.post('/api/posts', { name: $scope.newPost });
      $scope.newPost = '';
    };

    $scope.deletePost = function(post) {
      $http.delete('/api/posts/' + post._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('post');
    });
  });
