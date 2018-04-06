const huejay = require('huejay');
const Promise = require('bluebird');

class LightController {
  search() {
    return new Promise((resolve, reject) => {
      huejay.discover().then(bridges => {
        resolve(bridges);
      }).catch(reject);
    });
  }
}

module.exports = LightController;
