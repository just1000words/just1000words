"use strict";

var editor

ideasApp.controller("EditorController", function($scope){
  $scope.message = "Write your ideas in an easy to understand way by using the 1000 most common words"

  var $iframe = $("iframe")
  $iframe.ready(function(){
    editor = $iframe.contents().editor
    console.log(editor)
  })
})
