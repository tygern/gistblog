'use strict';

angular.module('gistblogApp')
  .controller('PostCtrl', function ($scope, $document, $sce, $stateParams, PostService) {
    PostService.get($stateParams.title).then(function (result) {
      $scope.postName = result.data.name;

      var postElement = angular.element(atob(result.data.content));

      _.each(postElement, function (element) {
        if(element.tagName === 'PRE') {
          hljs.highlightBlock(element);
        }
      });


      angular.element(document.querySelector('#post-content')).append(postElement);
    });
  });
