import { LocalDateTime } from "@js-joda/core";
import { ColDef, ColGroupDef } from "ag-grid-community";

export interface RowData {
    pmsToKsvEventName?: string | null;
    pmsToKsvEventData?: string | null;
    pmsToKsvReceivedTime?: LocalDateTime | null;
    pmsToKsvProcessedTime?: LocalDateTime | null;
    pmsToKsvStatus?: string | null;
    pmsToKsvErrorText?: string | null;
    pmsToKsvKSVUpdateTime?: LocalDateTime | null;
    pmsToKsvSyncKeyId?: number | null;
    pmsToKsvLocationId?: number | null;
    pmsToKsvSyncAction?: number | null;
    pmsToKsvCreatedOn?: LocalDateTime | null;
    pmsToKsvProcessedOn?: LocalDateTime | null;
    pmsToKsvHKUpdateTime?: LocalDateTime | null;
    ksvToPmsEventName?: string | null;
    ksvToPmsEventData?: string | null;
    ksvToPmsReceivedTime?: LocalDateTime | null;
    ksvToPmsProcessedTime?: LocalDateTime | null;
    ksvToPmsStatus?: string | null;
    ksvToPmsErrorText?: string | null;
    ksvToPmsKSVUpdateTime?: LocalDateTime | null;
}
export interface Data {
    id: number;
    eventsFrom: string;
    eventsTo: string;
    rowData: RowData[];
    columns: (ColDef | ColGroupDef)[] | null | undefined;
}