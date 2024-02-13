import { PopulationType } from "./Population";

export interface Stratification {
  id: string;
  description?: string; //informational bit about the Stratification
  definition?: string; // cql definition
  associationType?: PopulationType; // which Population it should be associated with
}
