export interface MeasureHistoryActions {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  performedAt: any;
  actionType: string;
  performedBy: string;
  additionalActionMessage?: string;
}
