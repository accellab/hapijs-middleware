const Confidence = require('confidence');

const criteria = {
  env: process.env.NODE_ENV,
};

var config = {
  $meta: 'Accellab API',
  projectName: 'accellab-api',
  staticFile: {
    $filter: 'env',
    production: 'http://accellab.tech',
    dev: 'http://accellab.tech',
    $default: 'http://localhost:8080',
  },
  secretKey: {
    $filter: 'env',
    production: 'accellab-prod-secret-1234',
    dev: 'accellab-dev-secret-1234',
    $default: 'accellab-local-secret-1234',
  },
  mysqlConnection: {
    $filter: 'env',
    production: {
      host: '127.0.0.1',
      user: 'root',
      password: 'password',
      database: 'accellab-db',
      port: 3306,
    },
    dev: {
      host: '127.0.0.1',
      user: 'root',
      password: 'password',
      database: 'accellab-db',
      port: 3306,
    },
    $default: {
      host: '127.0.0.1',
      user: 'root',
      password: 'password',
      database: 'accellab-db',
      port: 3306,
    },
  },
  swaggerOptions: {
    info: {
      title: 'Accellab API Documentation',
      version: '1.0.0',
    },
    tags: [
      {
        name: 'Static File',
        description: 'static file api',
      },
    ],
    grouping: 'tags',
  },
};

var store = new Confidence.Store(config);

exports.get = function (key) {
  return store.get(key, criteria);
};

exports.meta = function (key) {
  return store.meta(key, criteria);
};
