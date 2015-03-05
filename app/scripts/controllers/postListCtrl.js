'use strict';

angular.module('gistblogApp')
  .controller('PostListCtrl', function ($scope, PostService) {
    PostService.getList().then(function (result) {
      $scope.posts = result.data;
    });
  });
