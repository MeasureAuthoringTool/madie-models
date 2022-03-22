import model = require('../Model');

test('Verifies that Model has the correct attributes', () => {
  expect(model.Model.QICORE.valueOf() === 'QI Core');
});