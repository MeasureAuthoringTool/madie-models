const group = require('../MeasurePopulation');

test('Verifies that MeasurePopulation has the correct attributes', () => {
  expect(group.INITIAL_POPULATION === 'initialPopulation');
});