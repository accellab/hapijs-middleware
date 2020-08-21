const Response = require('../utils/Response');

module.exports = {
  name: 'blog-api',
  version: '1.0.0',
  register: (server) => {
    server.route([
      {
        method: 'GET',
        path: '/posts',
        options: {
          auth: 'guestAuth',
          description: 'Get blog posts',
          tags: ['api', 'Blog'],
        },
        handler: getBlogPosts,
      },
    ]);
  },
};

const getBlogPosts = async (request, h) => {
  try {
    const posts = [
      {
        id: 1,
        title:
          'Setting Up An API Using Flask, Google’s Cloud SQL And App Engine',
      },
      {
        id: 2,
        title: 'Mastering Props And PropTypes In React',
      },
    ];
    return h.response(
      Response.generateSuccessResponse(
        posts,
        'Successfully retrieve status',
        200
      )
    );
  } catch (error) {
    return error;
  }
};
