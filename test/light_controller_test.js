require('./test_helper')
const LightController = require('../lib/LightController')

describe('LightController', () => {
  describe('#search()', () => {
    it('should find a list of Hue bridges', () => {
      let controller = new LightController();

      let search = controller.search();

      expect(search).to.eventually.be.an(Array)
    });
  });
});
