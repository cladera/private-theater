var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    theaterApp: path.normalize(__dirname + '/../../theater-app'),
    adminApp: path.normalize(__dirname + '/../../theater-app'),
    app: {
      name: 'theater-server'
    },
    port: 3000,
    db: 'mongodb://localhost/backend-development'
  },

  test: {
    root: rootPath,
    theaterApp: path.normalize(__dirname + '/../../theater-app'),
    adminApp: path.normalize(__dirname + '/../../theater-app'),
    app: {
      name: 'theater-server'
    },
    port: 9000,
    db: 'mongodb://localhost/backend-test'
  },

  production: {
    root: rootPath,
    theaterApp: path.normalize(__dirname + '/../../theater-app'),
    adminApp: path.normalize(__dirname + '/../../theater-app'),
    app: {
      name: 'theater-server'
    },
    port: 80,
    db: 'mongodb://localhost/backend-production'
  }
};

module.exports = config[env];
