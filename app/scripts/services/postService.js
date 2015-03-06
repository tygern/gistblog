'use strict';

angular.module('gistblogApp')
  .service('PostService', function ($http) {
    function getList() {
      return $http.get('https://api.github.com/repositories/31714901/contents/posts')
    }
    function get(title) {
      return $http.get('https://api.github.com/repos/tygern/blog-posts/contents/posts/' + title)
    }

    return {
      getList: _.memoize(getList),
      get: _.memoize(get)
    }
  });
