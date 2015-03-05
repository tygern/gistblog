'use strict';

angular.module('gistblogApp')
  .controller('PostCtrl', function ($scope, $sce, $stateParams, PostService) {
    PostService.get($stateParams.title).then(function (result) {
      $scope.postContent = $sce.trustAsHtml(atob(result.data.content));
    });
  });
