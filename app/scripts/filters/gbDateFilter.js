'use strict';

angular.module('gistblogApp')
  .filter('gbDate', function () {
    return function (input) {
      return input.slice(0, 10);
    };
  });
