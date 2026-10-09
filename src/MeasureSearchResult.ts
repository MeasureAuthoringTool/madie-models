import { MeasureListDTO } from "./MeasureListDTO";

export interface MeasureSearchResult {
  content: MeasureListDTO[];
  totalElements: number;
  totalPages: number;
  numberOfElements: number;
  pageable: {
    offset: number;
    pageNumber: number;
    pageSize: number;
  };
}
