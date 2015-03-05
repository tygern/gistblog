'use strict';

angular.module('gistblogApp')
  .service('PostService', function ($http) {
    function getList() {
      return $http.get('https://api.github.com/repos/tygern/blog-posts/contents/posts/')
    }
    function get(title) {
      return $http.get('https://api.github.com/repos/tygern/blog-posts/contents/posts/' + title)
    }

    return {
      getList: getList,
      get: get
    }
  });
