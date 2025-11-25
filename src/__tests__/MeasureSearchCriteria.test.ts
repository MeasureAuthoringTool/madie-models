import { MeasureSearchCriteria } from "../MeasureSearchCriteria";

describe("MeasureSearchCriteria", () => {
  it("should create search criteria with all optional fields undefined", () => {
    const criteria: MeasureSearchCriteria = {};
    expect(criteria.searchField).toBeUndefined();
    expect(criteria.optionalSearchProperties).toBeUndefined();
    expect(criteria.model).toBeUndefined();
    expect(criteria.draft).toBeUndefined();
    expect(criteria.excludeByMeasureIds).toBeUndefined();
  });

  it("should create search criteria with all fields populated", () => {
    const criteria: MeasureSearchCriteria = {
      searchField: "test",
      optionalSearchProperties: ["measureName", "version"],
      model: "QI-Core",
      draft: true,
      excludeByMeasureIds: ["measure1", "measure2"],
    };

    expect(criteria.searchField).toBe("test");
    expect(criteria.optionalSearchProperties).toEqual([
      "measureName",
      "version",
    ]);
    expect(criteria.model).toBe("QI-Core");
    expect(criteria.draft).toBe(true);
    expect(criteria.excludeByMeasureIds).toEqual(["measure1", "measure2"]);
  });

  it("should allow partial field population", () => {
    const criteria: MeasureSearchCriteria = {
      searchField: "test",
      draft: false,
    };

    expect(criteria.searchField).toBe("test");
    expect(criteria.optionalSearchProperties).toBeUndefined();
    expect(criteria.model).toBeUndefined();
    expect(criteria.draft).toBe(false);
    expect(criteria.excludeByMeasureIds).toBeUndefined();
  });
});
