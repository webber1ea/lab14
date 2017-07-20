var app = angular.module('myModule');

app.config(function($routeProvider){
  $routeProvider
    .when('/home', {
      controller: 'routeCtrl',
      templateUrl: 'home.html'
    })
    .when('/cat', {
      controller: 'routeCtrl',
      templateUrl: 'cat.html'
    })
    .when('/dog', {
      controller: 'routeCtrl',
      templateUrl: 'dog.html'
    })
    .otherwise({ redirectTo: '/'});
})
