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
        handler: () => {
          return {
            status: {
              code: 200,
              message: 'Server Running...',
            },
          };
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
