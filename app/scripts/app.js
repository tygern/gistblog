'use strict';

angular
  .module('gistblogApp', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/posts");
    //
    // Now set up the states
    $stateProvider
      .state('postList', {
        url: "/posts",
        templateUrl: "views/postList.html",
        controller: "PostListCtrl"
      })
      .state('post', {
        url: "/posts/:title",
        templateUrl: "views/post.html",
        controller: "PostCtrl"
      });
  });
