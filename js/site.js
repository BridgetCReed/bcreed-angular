var app=angular.module('single-page-app',['ngRoute']);
app.config(function($routeProvider){
      $routeProvider
          .when('/',{
                templateUrl: 'home.html'
          })
          .when('/home',{
                templateUrl: 'home.html'
          })
          .when('/about',{
                templateUrl: 'about.html'
          })
          .when('/contact',{
                templateUrl: 'contact.html'
          });
});
app.controller('cfgController',function($scope){
});