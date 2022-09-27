import { PopulationType, getPopulationCode } from "../Population";

test("Verifies that Population has the correct enum values", () => {
  expect(PopulationType.INITIAL_POPULATION).toBe("initialPopulation");
});

test("Verifies the correct PopulationType is returned for a string", () => {
  let popCode: string = getPopulationCode(PopulationType.DENOMINATOR);
  expect(popCode).toBe("DENOM");

});


test("Verifies the correct PopulationType is when no matxch in Enum", () => {
  let popCode: string = getPopulationCode("widget" as PopulationType);
  expect(popCode).toBe("widget");

});