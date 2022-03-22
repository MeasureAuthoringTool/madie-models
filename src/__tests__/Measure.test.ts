import Measure from '../Measure';
import { MeasurePopulation } from "../MeasurePopulation";
import { MeasureScoring } from "../MeasureScoring";
import { Model } from "../Model";


test('Verifies that Measure has the correct attributes', () => {
  const measure:Measure = {
    id:"test", 
    measureHumanReadableId:"testReadable", 
    measureSetId:"1", 
    version:1, 
    revisionNumber:2, 
    state:"draft", 
    measureName:"TestMeasure", 
    cqlLibraryName:"TestMeasureLibrary",
    measureScoring:MeasureScoring.COHORT,
    cql:"random string of cql code",
    createdAt:"",
    createdBy:"",
    lastModifiedAt:"",
    lastModifiedBy:"",
    model:Model.QICORE,
    measureMetaData: {}
  };
  expect(measure.id==="test");
});