'use strict';

angular.module('gistblogApp')
  .controller('PostCtrl', function ($scope, $document, $sce, $stateParams, PostService) {
    PostService.get($stateParams.title).then(function (result) {
      $scope.postName = result.data.name;

      var highlightScript = '<script>' +
        '_.each(angular.element(document).find("pre"), function (block) {' +
          'hljs.highlightBlock(block);' +
        '});' +
        '</script>' ;

      var postHtml = atob(result.data.content) + highlightScript;
      $scope.postContent = $sce.trustAsHtml(postHtml);
    });


  });
