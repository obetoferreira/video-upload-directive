'use strict';

/**
 * @ngdoc service
 * @name videoUploadDirectiveApp.Wistia
 * @description
 * # Wistia
 * Factory in the videoUploadDirectiveApp.
 */
angular.module('videoUploadDirectiveApp')
  .factory('Wistia', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
