const Response = require('../utils/Response');
const Contentful = require('../services/contentful');

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
      {
        method: 'GET',
        path: '/posts/{slug}',
        options: {
          auth: 'guestAuth',
          description: 'Get blog posts by ID',
          tags: ['api', 'Blog'],
        },
        handler: getBlogPostsBySlug,
      },
    ]);
  },
};

const getBlogPosts = async (request, h) => {
  try {
    let response = await Contentful.getAllEntries();
    response = response.map((item) => item.fields);
    return h.response(
      Response.generateSuccessResponse(
        response,
        'Successfully retrieve status',
        200
      )
    );
  } catch (error) {
    return error;
  }
};

const getBlogPostsBySlug = async (request, h) => {
  try {
    const { slug } = request.params;
    let response = await Contentful.getEntryBySlug(slug);
    response = response.map((item) => item.fields);
    return h.response(
      Response.generateSuccessResponse(
        response[0],
        'Successfully retrieve status',
        200
      )
    );
  } catch (error) {
    return error;
  }
};
