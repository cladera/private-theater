'use strict';

angular.module('privateTheaterApp')
  .service('Auth', ['$cookieStore','$http', function Auth($cookieStore, $http) {
    var userRoles = routingConfig.userRoles;
    var currentUser = $cookieStore.get('user') || { email: '', role: userRoles.public };

    $cookieStore.remove('user');

    function changeUser(user) {
      if(typeof user.role === 'string'){
        user.role = userRoles[user.role.toLowerCase()];
      }
      currentUser = user;
    }

    if(typeof currentUser.role === 'string'){
      currentUser.role = userRoles[currentUser.role.toLowerCase()];
    }
    return {
      /* jshint bitwise: false */
      authorize: function(accessLevel, role){
        if(role === undefined){
          role = currentUser.role;
        }
        return accessLevel.bitMask & role.bitMask;
      },
      isLoggedIn: function(user) {
        if(user === undefined){
          user = currentUser;
        }
        return user.role.title === userRoles.user.title || user.role.title === userRoles.admin.title;
      },
      login: function(user, success, error) {
        $http.post('/login', user).success(function(user){
          changeUser(user);
          success(user);
        }).error(error);
      },
      user: currentUser
    };
  }]);