var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development',
    mongoUrl = require('./mongo');

if(process.env.VCAP_SERVICES){
  var services = JSON.parse(process.env.VCAP_SERVICES);
  console.log(services);
  var mongo = services['mongodb2-2.4.8'][0]['credentials'];
}else {
  var mongo = {
    "hostname":"localhost",
    "port":27017,
    "username":"",
    "password":"",
    "name":"",
    "db":"production"
  };
}
var config = {
  development: {
    root: rootPath,
    theaterApp: path.normalize(__dirname + '/../theater-app'),
    adminApp: path.normalize(__dirname + '../admin-app'),
    app: {
      name: 'theater-server'
    },
    port: 3000,
    db: 'mongodb://localhost/backend-development'
  },

  test: {
    root: rootPath,
    theaterApp: path.normalize(__dirname + '/../theater-app'),
    adminApp: path.normalize(__dirname + '/../admin-app'),
    app: {
      name: 'theater-server'
    },
    port: 9000,
    db: 'mongodb://localhost/backend-test'
  },

  production: {
    root: rootPath,
    theaterApp: path.normalize(__dirname + '/../theater-app'),
    adminApp: path.normalize(__dirname + '/../admin-app'),
    app: {
      name: 'theater-server'
    },
    port: 80,
    db: mongoUrl(mongo)
  }
};

module.exports = config[env];
