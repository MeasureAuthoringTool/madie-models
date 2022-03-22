import group = require('../MeasurePopulation');  

test('Verifies that MeasurePopulation has the correct attributes', () => {
  
  expect(group.MeasurePopulation.INITIAL_POPULATION === 'initialPopulation');
});