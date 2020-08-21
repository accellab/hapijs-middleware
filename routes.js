const initServerRoute = {
  name: 'initial-route',
  version: '1.0.0',
  register: (server) => {
    server.route([
      {
        method: 'GET',
        path: '/',
        options: {
          auth: false,
        },
        handler: (request, h) => {
          return h.file('index.html');
        },
      },
    ]);
  },
};

module.exports = [
  {
    plugin: initServerRoute,
  },
  {
    plugin: require('./src/api/blog'),
    routes: {
      prefix: '/api/blog',
    },
  },
  {
    plugin: require('./src/api/staticfile'),
    routes: {
      prefix: '/api/static/file',
    },
  },
];
