const TokenExtractor = require('./tokenExtractor');

const scheme = () => {
  return {
    validate: (decoded, request) => {
      const headers = request.headers;
      const token = TokenExtractor(headers.authorization);
      if (headers['channelid'] === 'ACCELLAB') {
        return {
          isValid: true,
          credentials: { token, payload: decoded },
        };
      }
      return { isValid: false };
    },
  };
};

module.exports = scheme;
