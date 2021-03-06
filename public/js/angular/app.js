"use strict";

//The root Angular app
var ideasApp = angular.module("ideasApp", ["ngResource", "ngRoute"])

//Configure Anuglar routes
ideasApp.config(function($routeProvider, $locationProvider){

  $routeProvider.when("/editor", {
    templateUrl: "/templates/directives/editor.html",
    controller: "EditorController"
  })

  $locationProvider.html5Mode(true)
})
