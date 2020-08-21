const Fs = require('fs');
const Path = require('path');
const PRODUCTS = Path.join(__dirname, '../../assets/products.json');

const readFile = (file) => {
  return new Promise(function (resolve, reject) {
    Fs.readFile(file, function (err, content) {
      if (err) {
        resolve({ err: err });
        return;
      }
      var json = JSON.parse(content);
      resolve(json);
    });
  });
};

const readProductJson = () => {
  return new Promise((resolve, reject) => {
    return readFile(PRODUCTS).then((response) => {
      resolve(response);
    });
  });
};

module.exports = {
  readProductJson,
};
