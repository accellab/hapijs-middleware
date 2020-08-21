const Connect = require('../services/mysql');

const getBlog = () => {
  return new Promise((resolve, reject) => {
    Connect()
      .then((connection) => {
        connection.query('SELECT * FROM blog', (error, results, fields) => {
          if (error) reject(error);
          connection.release();
          resolve(results);
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports = {
  getBlog,
};
