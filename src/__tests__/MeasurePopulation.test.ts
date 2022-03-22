const group = require('../MeasurePopulation');

test('Verifies that Model has the correct attributes', () => {
  expect(group.INITIAL_POPULATION === 'initialPopulation');
});