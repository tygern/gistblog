'user strict';

angular.module('gistblogApp')
  .filter('gbTitle', function () {
    return function (input) {
      return _.map(_.words(input.slice(0, -5)), _.capitalize).join(" ");
    };
  });
