'use strict';

/**
 * @ngdoc directive
 * @name videoUploadDirectiveApp.directive:videoUpload
 * @description
 * # videoUpload
 */
angular.module('videoUploadDirectiveApp')
  .directive('videoUpload', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the videoUpload directive');
      }
    };
  });
