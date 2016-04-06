//The root Angular app
console.log("in app")
var app = angular.module("ideasApp", ["ngResource", "ngRoute"])

.config(function($routeProvider, $locationProvider){
  $routeProvider.when("/test", {
    template: "<p>test</p>"
  })

  $routeProvider.when("/about", {
    template: "This is a simple about page"
  })

  $locationProvider.html5Mode(true)
  console.log("assumed ready")
})
