module.exports = {
  generateSuccessResponse: (data, message, code) => {
    const total = data.length;
    return {
      status: 'success',
      code,
      message,
      total,
      data,
    };
  },
  generateErrorResponse: (message, code) => {
    return {
      status: 'error',
      code,
      message,
    };
  },
};
