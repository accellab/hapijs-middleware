const Boom = require('boom');

const scheme = () => {
  return {
    authenticate: (request, h) => {
      const authorization =
        request.headers['x-custom-accelab-api-guest-authentication'];
      if (!authorization) {
        throw Boom.unauthorized();
      }
      return h.authenticated({ credentials: { is_guest: true } });
    },
  };
};

module.exports = scheme;
