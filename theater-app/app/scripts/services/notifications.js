'use strict';

angular.module('privateTheaterApp')
  .factory('notifications', ['notify', function (notify) {
    notify.config({
      top: 60
    });
    return {
      success: function (message) {
        notify({
          message: message,
          template: 'views/notifications/success.html'
        });
      },
      info: function (message) {
        notify({
          message: message,
          template: 'views/notifications/info.html'
        });
      }
    };
  }]);
